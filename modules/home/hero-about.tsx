import Image from "next/image";
import Link from "next/link";
import useCommonData from "@/hooks/use-common-data";

export default function HeroAbout() {
  const commonData = useCommonData();
  return (
    <div className="hero-about" id="about">
      <div className="hero-img img-container">
        <Image src="/assets/images/blue goddess.png" alt="Main hero image" fill />
      </div>
      <div className="about-text">
        <h3>About us</h3>
        <h2>{commonData.tagline}</h2>
        <p>{commonData.aboutClub}</p>
        <Link className="read-more" href="/tv">
          Know more
        </Link>
      </div>
    </div>
  );
}
