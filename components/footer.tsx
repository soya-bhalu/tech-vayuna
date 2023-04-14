import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrInstagram } from "react-icons/gr";

export default function Footer() {
  return (
    <footer>
      <div className="link-texts">
        <div className="about-us">
          <span>About Us</span>
          <Link href="/">Club</Link>
          <Link href="/">Club</Link>
          <Link href="/">Club</Link>
          <Link href="/">Club</Link>
        </div>
        <div className="event-links">
          <span>Event Links</span>
          <Link href="/">Club</Link>
          <Link href="/">Club</Link>
          <Link href="/">Club</Link>
        </div>
        <div className="contact-links">
          <span>Contact Us</span>
          <Link href="/">Club</Link>
          <Link href="/">Club</Link>
          <Link href="/">Club</Link>
        </div>
      </div>
      <div className="visual-links">
        <div className="img-container">
          <Image src="/assets/images/pink god.png" alt="logo" fill />
        </div>
        <span>Tech Vayuna</span>
        <div className="socials">
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
      </div>
    </footer>
  );
}
