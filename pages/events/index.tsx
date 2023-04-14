import gqlclient from "@/gql/client";
import { gql } from "graphql-request";
import EventCards from "@/modules/events/event-cards";
import MainEvent from "@/modules/events/main-event";
import type { GetServerSideProps } from "next";
import { soloEventDeets } from "../../gql/queries";

export default function Events({ eventData }: any) {
  console.log("log this", eventData);

  // const soloDetails = eventData.eventNameCollection.items;

  // return <></>;
  return (
    <div className="events-mainpage">
      <MainEvent />
      <div className="past-heading-container">
        <h3 className="past-event-heading">Past Events</h3>
        <div className="line" title="line" />
      </div>
      <EventCards eventData={eventData} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const event = (await gqlclient.request(soloEventDeets)) ?? {};

  const eventDeets = event.eventNameCollection.items;

  return {
    props: {
      eventData: eventDeets,
    },
  };
};
