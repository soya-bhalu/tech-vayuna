import { GetServerSideProps } from "next";
import Head from "next/head";
import gqlclient from "@/gql/client";
import { memberDetails } from "@/gql/queries";
import useCommonData from "@/hooks/use-common-data";
import TeamType from "@/modules/team/team-type";
import { MemDeetsType } from "@/types";

export const getServerSideProps: GetServerSideProps = async () => {
  const headMem: any = await gqlclient.request(memberDetails, {
    memType: "head"
  });
  const memMem: any = await gqlclient.request(memberDetails, {
    memType: "member"
  });
  const alumMem: any = await gqlclient.request(memberDetails, {
    memType: "alumini"
  });
  const members = {
    heads: headMem.memberCollection.items,
    members: memMem.memberCollection.items,
    alumini: alumMem.memberCollection.items
  };
  return {
    props: { teamData: members }
  };
};

export default function Team({ teamData }: { teamData: MemDeetsType["memDeetsProp"] }) {
  const commonData = useCommonData();

  return (
    <>
      <Head>
        <title>{`${commonData.clubName} | Team`}</title>
      </Head>

      <section className="team-container">
        <TeamType data={teamData.heads} title="Heads" />
        <TeamType data={teamData.members} title="Members" />
        <TeamType data={teamData.alumini} title="Alumini" />
      </section>
    </>
  );
}
