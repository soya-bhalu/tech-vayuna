import Image from "next/image";
import HeroBanner from "@/modules/home/hero-banner";
import HeroAbout from "@/modules/home/hero-about";
import EventCards from "@/modules/events/event-cards";
import MainEvent from "@/modules/events/main-event";

export default function Home() {
  const eventDetails: string[] = [
    {
      eventName: "Event One",
      eventDate: "12-10-23",
      eventDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa nulla rem vel! Quo, nihil.",
      imgSrc: "/assets/images/hero img.png",
    },
    {
      eventName: "Event Two",
      eventDate: "12-10-23",
      eventDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa nulla rem vel! Quo, nihil.",
      imgSrc: "/assets/images/hero img.png",
    },
    {
      eventName: "Event Three",
      eventDate: "12-10-23",
      eventDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa nulla rem vel! Quo, nihil.",
      imgSrc: "/assets/images/hero img.png",
    },
    {
      eventName: "Event Four",
      eventDate: "12-10-23",
      eventDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa nulla rem vel! Quo, nihil.",
      imgSrc: "/assets/images/hero img.png",
    },
  ];
  return (
    <section id="home">
      <HeroBanner />
      <HeroAbout />
      <MainEvent />
      <EventCards />
    </section>
  );
}
