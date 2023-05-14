import { GetServerSideProps } from "next";
import gqlclient from "@/gql/client";
import { allEventDetails } from "@/gql/queries";
import EventCards from "@/modules/events/event-cards";
import MainEvent from "@/modules/events/main-event";

export const getServerSideProps: GetServerSideProps = async () => {
  const pastEventData: any = await gqlclient.request(allEventDetails, { eventType: "past" });
  const upcomingEventData: any = await gqlclient.request(allEventDetails, { eventType: "upcoming" });
  const eventDetails = {
    upcomingSingleEvent: upcomingEventData.eventCollection.items,
    pastSingleEvent: pastEventData.eventCollection.items
  };
  return {
    props: { eventDetails }
  };
};

export default function index({ eventDetails }: { eventDetails: any }) {
  const { pastSingleEvent } = eventDetails;
  const { upcomingSingleEvent } = eventDetails;
  return (
    <div className="events-mainpage">
      <div className="heading-container">
        <h1 className="event-heading">Upcoming Events</h1>
        <div className="line" title="line"></div>
      </div>
      <MainEvent data={upcomingSingleEvent} />

      <div className="heading-container">
        <h1 className="event-heading">Past Events</h1>
        <div className="line" title="line"></div>
      </div>
      <EventCards data={pastSingleEvent} />
    </div>
  );
}
