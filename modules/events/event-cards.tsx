import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EventCards({ data }: { data: any }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const intersectionCallBack: IntersectionObserverCallback = useCallback((entries) => {
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
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | undefined = undefined;
    if (cardRef.current) {
      const intersectionOptions: IntersectionObserverInit = {
        threshold: 0.5
      };
      observer = new IntersectionObserver(intersectionCallBack, intersectionOptions);
      observer.observe(cardRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [cardRef, intersectionCallBack]);

  return (
    <div className="event-gallery test" ref={cardRef}>
      {data.map((event: any, index: number) => {
        return (
          <div className="cards" key={index}>
            <div className="img-container">
              <Image src={event.eventPicture.url} alt="Main hero image" fill />
            </div>
            <h1>{event.title}</h1>
            <div className="event-details">
              <span>{event.getDate}</span>
              <span>{event.smallDescription}</span>
            </div>
            <div className="btn-row">
              <Link className="explore-more" href={`/events/${event.title.replaceAll(" ", "-").toLowerCase()}`}>
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
