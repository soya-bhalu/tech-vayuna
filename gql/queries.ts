import { gql } from "graphql-request";

export const allEventDetails = gql`
  query ($eventType: String!) {
    eventCollection(where: { eventType: { type_contains: $eventType } }) {
      items {
        title
        getDate
        smallDescription
        registrationLink
        eventPicture {
          url
        }
      }
    }
  }
`;

export const memberDetails = gql`
  query ($memType: String!) {
    memberCollection(where: { memberType: { title_contains: $memType } }, order: name_ASC) {
      items {
        name
        profilePicture {
          url
        }
        linkedIn
        insta
      }
    }
  }
`;

export const singleEventDetails = gql`
  query ($eventName: String!) {
    eventCollection(where: { title_contains: $eventName }, limit: 1) {
      items {
        title
        getDate
        smallDescription
        registrationLink
        description {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                url
                description
                height
                width
              }
            }
          }
        }
        eventPicture {
          url
        }
      }
    }
  }
`;

export const getAllEventNames = gql`
  query {
    eventCollection {
      items {
        title
      }
    }
  }
`;
