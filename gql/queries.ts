import { gql } from "graphql-request";

export const soloEventDeets = gql`
  query {
    eventNameCollection {
      items {
        eventName
        eventDescription
      }
    }
  }
`;

// interface eventDetailsType {
//   eventName: string;
//   eventDescription: string;
// }

// interface eventItemsType {
//   items: eventDetailsType[];
// }

// interface eventCollectionType {
//   eventNameCollection: eventItemsType[];
// }
