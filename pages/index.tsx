import HeroAbout from "@/modules/home/hero-about";
import HeroBanner from "@/modules/home/hero-banner";

export default function Home() {
  return (
    <section id="home">
      <HeroBanner />
      <HeroAbout />
    </section>
  );
}
