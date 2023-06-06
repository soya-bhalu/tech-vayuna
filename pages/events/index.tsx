import { GetServerSideProps } from "next";
import Head from "next/head";
import gqlclient from "@/gql/client";
import { allEventDetails } from "@/gql/queries";
import UseCommonData from "@/hooks/use-common-data";
import EventCards from "@/modules/events/event-cards";
import MainEvent from "@/modules/events/main-event";
import { EventDataType, EventDetailsType } from "@/types";

export const getServerSideProps: GetServerSideProps = async () => {
  const pastEventData: EventDataType = await gqlclient.request(allEventDetails, { eventType: "past" });
  const upcomingEventData: EventDataType = await gqlclient.request(allEventDetails, { eventType: "upcoming" });
  const eventDetails = {
    upcomingSingleEvent: upcomingEventData.eventCollection.items,
    pastSingleEvent: pastEventData.eventCollection.items
  };
  return {
    props: { eventDetails }
  };
};

export default function index({ eventDetails }: { eventDetails: EventDetailsType }) {
  const commonData = UseCommonData();
  const { pastSingleEvent } = eventDetails;
  const { upcomingSingleEvent } = eventDetails;
  return (
    <>
      <Head>
        <title>{`${commonData.clubName} | Events`}</title>
        <meta name="description" content={`${commonData.clubName} | Events`} />
      </Head>
      <section className="events-mainpage">
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
      </section>
    </>
  );
}
