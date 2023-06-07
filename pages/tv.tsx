import type { GetStaticProps } from "next";
import Head from "next/head";
import gqlclient from "@/gql/client";
import { getClubLinks } from "@/gql/queries";
import useCommonData from "@/hooks/use-common-data";
import TvAbout from "@/modules/tv/tv-about";
import TvLink from "@/modules/tv/tv-link";
import type { ClubLinksType, LinksDataType } from "@/types";

export const getStaticProps: GetStaticProps = async () => {
  const links: LinksDataType = await gqlclient.request(getClubLinks);
  const linkData = links.socialsCollection.items[0];
  return {
    props: linkData,
    revalidate: 60 * 60 * 6
  };
};

export default function Tv(props: ClubLinksType) {
  const commonData = useCommonData();
  return (
    <>
      <Head>
        <title>{`${commonData.clubName} | Tv`}</title>
        <meta name="description" content={`${commonData.clubName} | ${commonData.aboutTv}`} />
      </Head>
      <section id="tv">
        <h1>{commonData.clubName} Tv Talkies</h1>

        <TvLink data={props} />
        <TvAbout />
      </section>
    </>
  );
}
