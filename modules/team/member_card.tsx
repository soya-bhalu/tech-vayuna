import Image from "next/image";
import Link from "next/link";

export default function MemberCard() {
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
    <div className="event-gallery test">
      {eventDetails.map((deets, index) => {
        return (
          <div className="cards">
            <div className="img-container">
              <Image src="/assets/images/goku.png" alt="Main hero image" fill />
            </div>
            <h4>{deets.eventName}</h4>
            <div className="event-details">
              <span>{deets.eventDate}</span>
              <span>{deets.eventDesc}</span>
            </div>
            <div className="btn-row">
              <Link className="explore-more" href="/">
                Read More
              </Link>
              <Link className="read-more" href="/">
                Register
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
