import Head from "next/head";
import useCommonData from "@/hooks/use-common-data";
import HeroAbout from "@/modules/home/hero-about";
import HeroBanner from "@/modules/home/hero-banner";

export default function Home() {
  const commonData = useCommonData();
  return (
    <>
      <Head>
        <title>{`${commonData.clubName} | Home`}</title>
      </Head>
      <section id="home">
        <HeroBanner />
        <HeroAbout />
      </section>
    </>
  );
}
