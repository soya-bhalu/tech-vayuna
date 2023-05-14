import { useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MainEvent({ data }: { data: any }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const intersectionCallBack: IntersectionObserverCallback = useCallback((entries) => {
    const intersecting: boolean = entries[0]?.isIntersecting ?? false;
    entries.forEach(() => {
      if (intersecting) {
        imgRef.current?.classList.add("fade-in");
        textRef.current?.classList.add("fade-in");
      } else {
        imgRef.current?.classList.remove("fade-in");
        textRef.current?.classList.remove("fade-in");
      }
    });
  }, []);

  useEffect(() => {
    let observer: undefined | IntersectionObserver = undefined;
    if (imgRef.current && textRef.current) {
      const intersectionOptions: IntersectionObserverInit = { threshold: 0 };
      observer = new IntersectionObserver(intersectionCallBack, intersectionOptions);
      observer.observe(imgRef.current);
      observer.observe(textRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [imgRef, textRef, intersectionCallBack]);

  return (
    <div className="upcoming-event">
      <div className="img-container" ref={imgRef}>
        <Image src={data[0].eventPicture.url} alt={`${data[0].title} image`} fill />
      </div>
      <div className="event-text" ref={textRef}>
        <h3>Upcoming Event</h3>
        <h1>{data[0].title}</h1>
        <p>{data[0].smallDescription}</p>
        <div className="btn-row">
          <Link className="explore-btn" href={data[0].registrationLink}>
            Register
          </Link>
          <Link className="explore-more" href={`/events/${data[0].title.replaceAll(" ", "-").toLowerCase()}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
