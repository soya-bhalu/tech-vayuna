import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";
import useCommonData from "@/hooks/use-common-data";

export default function Header() {
  const commonData = useCommonData();

  const [navState, setNavState] = useState(false);

  const handleClick = () => {
    setNavState(!navState);
  };
  return (
    <header>
      <Link className="img-container logo" href="/">
        <Image src="/assets/images/logo.png" alt="Logo" fill priority></Image>
      </Link>

      <div className={`hamburger ${navState ? "active" : "inactive"}`} title="hamburger lines" onClick={handleClick}>
        <div className="line" title="line"></div>
        <div className="line" title="line"></div>
      </div>

      <nav className={`${navState ? "active" : "inactive"}`}>
        <Link href="/" onClick={handleClick}>
          Home
        </Link>
        <Link href="/#about" onClick={handleClick}>
          About
        </Link>
        <Link href="/tv" onClick={handleClick}>
          TV Talkies
        </Link>
        <Link href="/events" onClick={handleClick}>
          Events
        </Link>
        <Link href="/team" onClick={handleClick}>
          Team
        </Link>
        <div className="cta">
          <Link className="cta-links" href={`https://www.instagram.com/${commonData.clubInsta}`}>
            <GrInstagram />
          </Link>
          <Link className="cta-links" href={`https://www.linkedin.com/company/${commonData.clubLinkedin}`}>
            <GrLinkedin />
          </Link>
          <Link className="cta-links" href={`https://twitter.com/${commonData.clubTwitter}`}>
            <GrTwitter />
          </Link>
        </div>
      </nav>
    </header>
  );
}
