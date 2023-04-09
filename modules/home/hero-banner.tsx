import Image from "next/image";
import { heading, subHeading, heroPara } from "./text";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-text">
        <h3>{subHeading}</h3>
        <h1>{heading}</h1>
        <p>{heroPara}</p>
        <Link className="explore-btn" href="/">
          Explore Now
        </Link>
      </div>
      <div className="hero-img img-container">
        <Image src="/assets/images/pink god.png" alt="Main hero image" fill />
        <div className="glass-text">
          <span>Members: 30</span>
          <span>Alumini: 30</span>
        </div>
      </div>
    </div>
  );
}
