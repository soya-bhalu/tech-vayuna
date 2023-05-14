import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { memSkeletonType } from "@/types";

export default function MemberCard(prop: memSkeletonType) {
  const { insta, linkedIn, name, profilePicture } = prop;

  return (
    <div className="card-container">
      <div className="img-container">
        <Image src={profilePicture.url} fill alt="img" />
      </div>
      <div className="socials">
        <Link href={`https://www.instagram.com/${insta}/`}>
          <FaInstagram />
        </Link>
        <Link href={`https://www.linkedin.com/in/${linkedIn}/`}>
          <FaLinkedin />
        </Link>
      </div>
      <h3>{name}</h3>
    </div>
  );
}
