import Image from "next/image";
import Link from "next/link";
import { GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";
import useCommonData from "@/hooks/use-common-data";

export default function Footer() {
  const commonData = useCommonData();
  return (
    <footer>
      <div className="footer-main">
        <div className="link-texts">
          <div className="about-us">
            <span>Site Map</span>
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/team">Team</Link>
          </div>
          <div className="contact-links">
            <span>Contact Us</span>
            <Link href={`https://www.instagram.com/${commonData.clubInsta}`}>Instagram</Link>
            <Link href={`https://www.linkedin.com/company/${commonData.clubLinkedin}`}>LinkedIn</Link>
            <Link href={`https://twitter.com/${commonData.clubTwitter}`}>Twitter</Link>
          </div>
        </div>
        <div className="visual-links">
          <Link className="img-container" href="/">
            <Image src="/assets/images/pink god.png" alt="logo" fill />
          </Link>
          <div className="click-links">
            <Link href="/">Tech Vayuna</Link>
            <Link href={`tel:${commonData.phoneOne}`}>{commonData.phoneOne}</Link>
            <Link href={`tel:${commonData.phoneTwo}`}>{commonData.phoneTwo}</Link>
          </div>
          <div className="socials">
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
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2023 {commonData.clubName}. All rights reserved.</span>
        <div>
          Designed and Developed by
          <Link href="http://hymnsofweb.com/" target="_blank" rel="noopener noreferrer">
            Hymns Of Web
          </Link>
        </div>
      </div>
    </footer>
  );
}
