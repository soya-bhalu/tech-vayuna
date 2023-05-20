import Image from "next/image";
import Link from "next/link";
import { GrInstagram, GrLinkedin, GrMail } from "react-icons/gr";

export default function Footer() {
  return (
    <footer>
      <div className="link-texts">
        <div className="about-us">
          <span>Site Map</span>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/team">Team</Link>
        </div>
        <div className="contact-links">
          <span>Contact Us</span>
          <Link href="https://www.instagram.com/tech_vayuna/">Instagram</Link>
          <Link href="https://www.linkedin.com/company/techvayuna/">LinkedIn</Link>
          <Link href="/">Mail</Link>
        </div>
      </div>
      <div className="visual-links">
        <Link className="img-container" href="/">
          <Image src="/assets/images/pink god.png" alt="logo" fill />
        </Link>
        <Link href="/">Tech Vayuna</Link>
        <div className="socials">
          <Link className="cta-links" href="/">
            <GrInstagram />
          </Link>
          <Link className="cta-links" href="/">
            <GrLinkedin />
          </Link>
          <Link className="cta-links" href="/">
            <GrMail />
          </Link>
        </div>
      </div>
    </footer>
  );
}
