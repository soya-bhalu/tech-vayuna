/* eslint-disable max-len */
import { createContext, type ReactNode, useState, Dispatch, SetStateAction, useContext } from "react";

interface ActualAppContextType {
  commonData: {
    clubName: string;
    clubDesc: string;
    tagline: string;
    aboutClub: string;
    aboutTv: string;
    reelAbout: string;
    clubInsta: string;
    clubLinkedin: string;
    clubTwitter: string;
    phoneOne: string;
    phoneTwo: string;
  };
}

type AppContextType = [ActualAppContextType, Dispatch<SetStateAction<ActualAppContextType>>];

const contextInit: ActualAppContextType = {
  commonData: {
    clubName: "TechVayuna",
    clubDesc:
      "Welcome to the official website of super cool club of SRMIST RMP! We are a vibrant community of like-minded individuals passionate about exploring and expanding the boundaries of technology. With a diverse range of members hailing from various fields, including software development, artificial intelligence, robotics, and more, our club provides a platform for learning, collaboration, and innovation.",
    tagline: "Inspire, Innovate, Elevate",
    aboutClub:
      "We are a vibrant community of passionate individuals dedicated to exploring and embracing the wonders of technology. From coding and software development to robotics and artificial intelligence, our club provides an engaging platform for members to expand their knowledge and skills in various technical domains. With a diverse range of workshops, seminars, and hands-on projects, we strive to foster a collaborative learning environment where members can share ideas, collaborate on innovative projects, and stay updated with the latest advancements in the tech world. Whether you're a beginner seeking to delve into the realm of technology or an experienced professional looking to connect with like-minded enthusiasts, our club offers endless opportunities for growth, networking, and intellectual stimulation. Join us on this exciting journey as we collectively shape the future through technology!",
    aboutTv:
      "Tech Vayuna TV is a cutting-edge online platform that brings you the latest news, trends, and insights from the world of technology. With a team of tech-savvy journalists and experts, we strive to provide you with accurate, reliable, and comprehensive coverage of the ever-evolving tech landscape. From breakthrough innovations to emerging startups, our platform offers a wide range of content including articles, reviews, interviews, and tutorials, catering to both tech enthusiasts and industry professionals alike. At Tech Vayuna TV, we believe in the power of knowledge and aim to empower our audience with valuable information that helps them stay informed and make informed decisions in their tech journey. Whether you're interested in consumer electronics, software development, cybersecurity, artificial intelligence, or any other tech-related field, we've got you covered. Our team curates and delivers content that explores the latest gadgets, explores in-depth analysis of tech trends, and provides practical tips and advice to enhance your tech skills. Join our community of tech enthusiasts and stay ahead of the curve with Tech Vayuna TV. ",
    reelAbout:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla vitae porro temporibus facilis delectus ducimus, eum magni libero quos?",
    clubInsta: "tech_vayuna",
    clubLinkedin: "techvayuna",
    clubTwitter: "tech_vayuna",
    phoneOne: "+917200836551",
    phoneTwo: "+919003062957"
  }
};

export const AppConst = createContext<AppContextType>([contextInit, () => contextInit]);

export const useSetAppContext = (newContext: ActualAppContextType) => {
  if (!newContext) throw new Error("Context param is not given or is null");
  const [_, setContext] = useContext(AppConst);
  setContext(newContext);
};

export const useGetAppContext = () => {
  return useContext(AppConst)[0];
};

export default function Appcontext(children: ReactNode) {
  const [contextState, setContextState] = useState<ActualAppContextType>(contextInit);
  return <AppConst.Provider value={[contextState, setContextState]}>{children}</AppConst.Provider>;
}
