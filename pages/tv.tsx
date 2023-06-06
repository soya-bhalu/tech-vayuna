import { GetServerSideProps } from "next";
import gqlclient from "@/gql/client";
import { getClubLinks } from "@/gql/queries";
import useCommonData from "@/hooks/use-common-data";
import TvAbout from "@/modules/tv/tv-about";
import TvLink from "@/modules/tv/tv-link";
import { clubLinksType } from "@/types";

export const getServerSideProps: GetServerSideProps = async () => {
  const links: any = await gqlclient.request(getClubLinks);
  const linkData = links.socialsCollection.items[0];
  return {
    props: linkData
  };
};

export default function Tv(props: clubLinksType) {
  const commonData = useCommonData();
  return (
    <section id="tv">
      <h1>{commonData.clubName} Tv Talkies</h1>

      <TvLink data={props} />
      <TvAbout />
    </section>
  );
}
