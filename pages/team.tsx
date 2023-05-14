import { GetServerSideProps } from "next";
import gqlclient from "@/gql/client";
import { memberDetails } from "@/gql/queries";
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
  return (
    <div className="team-container">
      <TeamType data={teamData.heads} />
      <TeamType data={teamData.members} />
      <TeamType data={teamData.alumini} />
    </div>
  );
}
