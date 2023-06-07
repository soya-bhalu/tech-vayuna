import Image from "next/image";
import Link from "next/link";
import useCommonData from "@/hooks/use-common-data";
import { ClubLinksType } from "@/types";

export default function TvLink({ data }: { data: ClubLinksType }) {
  const commonData = useCommonData();
  return (
    <div className="tv-link">
      <Link href="/" className="img-container">
        <Image src="/assets/images/blue goddess.png" alt="Reel Thumbanil" fill priority />
      </Link>
      <div className="text-container">
        <h2>Check out our latest video</h2>
        <p>{commonData.reelAbout}</p>
        <div className="btn-row">
          <Link href={`https://www.instagram.com/${data.tvTalkiesLink}`} className="reel-btn">
            View Reel
          </Link>
          <Link href={`https://www.instagram.com/${data.clubInsta}`} className="insta-btn">
            Visit Insta
          </Link>
        </div>
      </div>
    </div>
  );
}
