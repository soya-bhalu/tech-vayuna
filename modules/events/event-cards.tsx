import gqlclient from "@/gql/client";
import { gql } from "graphql-request";
import { soloEventDeets } from "@/gql/queries";
import type { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

interface eventDetailsType {
  eventName: string;
  eventDescription: string;
}

interface eventItemsType {
  items: eventDetailsType[];
}

interface eventCollectionType {
  eventNameCollection: eventItemsType[];
}

export default function EventCards({ eventData }: any) {
  console.log("this print eventDetailsProps", eventData);

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
    let observer: IntersectionObserver | undefined = undefined;
    if (cardRef.current) {
      const intersectionOptions: IntersectionObserverInit = {
        threshold: 0.5,
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
  }, [cardRef, intersectionCallBack]);

  return (
    <div className="event-gallery test" ref={cardRef}>
      {eventData.map((deets, index) => {
        return (
          <div className="cards" key={index}>
            <div className="img-container">
              <Image src="/assets/images/goku.png" alt="Main hero image" fill />
            </div>
            <h4>{deets.eventName}</h4>
            <div className="event-details">
              <span>{deets.eventName}</span>
              <span>{deets.eventDescription}</span>
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
