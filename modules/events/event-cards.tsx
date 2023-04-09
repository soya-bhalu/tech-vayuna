import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

export default function EventCards() {
  const cardRef = useRef<HTMLDivElement | null>();

  const intersectionCallBack: IntersectionObserverCallback = useCallback(
    (entries) => {
      const allCards = cardRef.current?.querySelectorAll(".cards");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          allCards?.forEach((card, idx) => {
            card.classList.add(idx % 2 === 0 ? "move-down" : "move-up");
          });
        } else {
          allCards?.forEach((card) => {
            card.classList.remove("move-up");
            card.classList.remove("move-down");
          });
        }
      });
    },
    []
  );

  useEffect(() => {
    let observer = undefined;
    if (cardRef.current) {
      const intersectionOptions: IntersectionObserverInit = {
        threshold: 0.2,
      };
      observer = new IntersectionObserver(
        intersectionCallBack,
        intersectionOptions
      );
      observer.observe(cardRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [cardRef]);

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
    <div className="event-gallery" ref={cardRef}>
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
