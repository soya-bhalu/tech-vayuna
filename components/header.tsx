import Image from "next/image";
import Link from "next/link";
import { GrInstagram } from "react-icons/gr";

export default function Header() {
  return (
    <header>
      <div className="img-container logo ">
        <Image src="/assets/images/hero-img.png" alt="Logo" fill priority></Image>
      </div>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/events">Events</Link>
        <Link href="/team">Team</Link>
      </nav>

      <div className="cta">
        <Link className="cta-links" href="/">
          <GrInstagram />
        </Link>
        <Link className="cta-links" href="/">
          <GrInstagram />
        </Link>
        <Link className="cta-links" href="/">
          <GrInstagram />
        </Link>
      </div>
    </header>
  );
}
