import Lottie from "lottie-react";
import innovativeLottie from "../public/assets/lottie/innovative.json";
import funLottie from "../public/assets/lottie/jumping.json";
import originalLottie from "../public/assets/lottie/original.json";

export function InnovativeLottie(props: any) {
  return <Lottie animationData={innovativeLottie} {...props}></Lottie>;
}

export function FunLottie(props: any) {
  return <Lottie animationData={funLottie} {...props}></Lottie>;
}

export function OriginalLottie(props: any) {
  return <Lottie animationData={originalLottie} {...props}></Lottie>;
}
