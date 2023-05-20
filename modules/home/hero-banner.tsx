import Image from "next/image";
import Link from "next/link";
import useCommonData from "@/hooks/use-common-data";

export default function HeroBanner() {
  const commonData = useCommonData();

  return (
    <div className="hero-banner">
      <div className="hero-text">
        <h3>Welcome To</h3>
        <h1>{commonData.clubName}</h1>
        <p>{commonData.clubDesc}</p>
        <Link className="explore-btn" href="/">
          Explore Now
        </Link>
      </div>
      <div className="hero-img img-container">
        <Image src="/assets/images/pink god.png" alt="Main hero image" fill />
      </div>
    </div>
  );
}
