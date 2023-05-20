import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrInstagram, GrLinkedin, GrMail } from "react-icons/gr";

export default function Header() {
  const [navState, setNavState] = useState(false);

  const handleClick = () => {
    setNavState(!navState);
  };
  return (
    <header>
      <Link className="img-container logo" href="/">
        <Image src="/assets/images/hero-img.png" alt="Logo" fill priority></Image>
      </Link>

      <div className={`hamburger ${navState ? "active" : "inactive"}`} title="hamburger lines" onClick={handleClick}>
        <div className="line" title="line"></div>
        <div className="line" title="line"></div>
      </div>

      <nav className={`${navState ? "active" : "inactive"}`}>
        <Link href="/" onClick={handleClick}>
          Home
        </Link>
        <Link href="/" onClick={handleClick}>
          About
        </Link>
        <Link href="/events" onClick={handleClick}>
          Events
        </Link>
        <Link href="/team" onClick={handleClick}>
          Team
        </Link>
        <div className="cta">
          <Link className="cta-links" href="https://www.instagram.com/tech_vayuna/">
            <GrInstagram />
          </Link>
          <Link className="cta-links" href="https://www.linkedin.com/company/techvayuna/">
            <GrLinkedin />
          </Link>
          <Link className="cta-links" href="/">
            <GrMail />
          </Link>
        </div>
      </nav>
    </header>
  );
}
