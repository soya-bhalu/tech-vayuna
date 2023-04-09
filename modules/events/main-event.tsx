import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import { useRef, useState } from "react";

export default function MainEvent() {
  const imgRef = useRef<HTMLDivElement | null>();
  const textRef = useRef<HTMLDivElement | null>();

  const intersectionCallBack: IntersectionObserverCallback = useCallback(
    (entries) => {
      const intersecting: boolean = entries.isIntersecting;
      entries.forEach((entry, ind) => {
        if (entry.isIntersecting) {
          imgRef.current?.classList.add("fade-in");
          textRef.current?.classList.add("fade-in");
        } else {
          imgRef.current?.classList.remove("fade-in");
          textRef.current?.classList.remove("fade-in");
        }
      });
    },
    []
  );

  useEffect(() => {
    let observer: undefined | IntersectionObserver = undefined;
    if (imgRef.current && textRef.current) {
      const intersectionOptions: IntersectionObserverInit = { threshold: 0.2 };
      observer = new IntersectionObserver(
        intersectionCallBack,
        intersectionOptions
      );
      observer.observe(imgRef.current);
      observer.observe(textRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [imgRef, textRef]);

  return (
    <div className="upcoming-event">
      <div className="img-container" ref={imgRef}>
        <Image src="/assets/images/goku full.png" alt="Main hero image" fill />
      </div>
      <div className="event-text" ref={textRef}>
        <h3>Upcoming Event</h3>
        <h2>Event Name</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          expedita aliquam porro ipsam, molestias molestiae. Velit omnis
          necessitatibus ex quia?
        </p>
        <Link className="explore-btn" href="/">
          Register
        </Link>
      </div>
    </div>
  );
}
