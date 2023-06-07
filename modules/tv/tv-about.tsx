import { FunLottie, InnovativeLottie, OriginalLottie } from "@/components/lottie";
import useCommonData from "@/hooks/use-common-data";

export default function TvAbout() {
  const commonData = useCommonData();
  return (
    <div className="tv-about">
      <div className="heading-container">
        <h2>About</h2>
        <div className="line" title="line"></div>
      </div>
      <p>{commonData.aboutTv}</p>
      <div className="pic-div">
        <div className="tv-cards">
          <OriginalLottie className="pic" />
          <div className="word">Original</div>
        </div>
        <div className="tv-cards">
          <InnovativeLottie className="pic" />
          <div className="word">Innnovate</div>
        </div>
        <div className="tv-cards">
          <FunLottie className="pic" />
          <div className="word">Fun</div>
        </div>
      </div>
    </div>
  );
}
