import Image from "next/image";
import Link from "next/link";

export default function HeroAbout() {
  return (
    <div className="hero-about">
      <div className="hero-img img-container">
        <Image
          src="/assets/images/blue goddess.png"
          alt="Main hero image"
          fill
        />
      </div>
      <div className="about-text">
        <h3>About us</h3>
        <h2>Give up on your dream and die</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          expedita aliquam porro ipsam, molestias molestiae. Velit omnis
          necessitatibus ex quia?
        </p>
        <Link className="read-more" href="/">
          Read more
        </Link>
      </div>
    </div>
  );
}
