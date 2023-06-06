import { memSkeletonType } from "@/types";
import MemberCard from "./member-card";

const cardMapper = (data: memSkeletonType, index: number) => {
  const urlObj = { url: data.profilePicture.url };
  return (
    <MemberCard name={data.name} insta={data.insta} linkedIn={data.linkedIn} profilePicture={urlObj} key={index} />
  );
};

export default function TeamType({ data, title }: { data: memSkeletonType[]; title: string }) {
  return (
    <>
      <div className="team-type-container">
        <div className="heading-container">
          <h1>{title}</h1>
          <div className="line" title="line"></div>
        </div>
        <div className="cards-wrapper">{data.map(cardMapper)}</div>
      </div>
    </>
  );
}
