import type { GetStaticProps } from "next";
import Head from "next/head";
import gqlclient from "@/gql/client";
import { memberDetails } from "@/gql/queries";
import useCommonData from "@/hooks/use-common-data";
import TeamType from "@/modules/team/team-type";
import type { MemDeetsType, TeamDataType } from "@/types";

export const getStaticProps: GetStaticProps = async () => {
  const headMem: TeamDataType = await gqlclient.request(memberDetails, {
    memType: "head"
  });
  const memMem: TeamDataType = await gqlclient.request(memberDetails, {
    memType: "member"
  });
  const alumMem: TeamDataType = await gqlclient.request(memberDetails, {
    memType: "alumini"
  });
  const members = {
    heads: headMem.memberCollection.items,
    members: memMem.memberCollection.items,
    alumini: alumMem.memberCollection.items
  };
  return {
    props: { teamData: members },
    revalidate: 60 * 60 * 6
  };
};

export default function Team({ teamData }: { teamData: MemDeetsType["memDeetsProp"] }) {
  const commonData = useCommonData();

  return (
    <>
      <Head>
        <title>{`${commonData.clubName} | Team`}</title>
        <meta name="description" content={`${commonData.clubName} | Team`} />
      </Head>

      <section className="team-container">
        <TeamType data={teamData.heads} title="Heads" />
        <TeamType data={teamData.members} title="Members" />
        <TeamType data={teamData.alumini} title="Alumini" />
      </section>
    </>
  );
}
