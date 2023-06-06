export interface LinksDataType {
  socialsCollection: {
    items: clubLinksType[];
  };
}
export interface ClubLinksType {
  clubInsta: string;
  clubLinkedin: string;
  tvTalkiesLink: string;
  phoneOne: string;
  phoneTwo: string;
}
export interface TeamDataType {
  memberCollection: {
    items: MemDeetsType[];
  };
}
export interface MemDeetsType {
  memDeetsProp: {
    alumini: memSkeletonType[];
    members: memSkeletonType[];
    heads: memSkeletonType[];
  };
}
export interface MemSkeletonType {
  insta: string;
  linkedIn: string;
  name: string;
  profilePicture: {
    url: string;
  };
}
export interface EventDataType {
  eventCollection: {
    items: smallDescType[];
  };
}
export interface EventDetailsType {
  pastSingleEvent: smallDescType[];
  upcomingSingleEvent: singleDataType;
}
export interface SmallDescType {
  eventPicture: {
    url: string;
  };
  getDate: string;
  registrationLink: string;
  smallDescription: string;
  title: string;
}
export interface SingleDataType {
  eventCollection: {
    items: singleEventDataType[];
  };
}
export interface SingleEventDataType {
  title: string;
  getDate: string;
  smallDescription: string;
  registrationLink: string;
  description: {
    json: any;
    links: {
      assets: {
        block: {
          sys: {
            id: string;
          };
          url: string;
          description: string;
          height: number;
          width: number;
        };
      };
    };
  };
  eventPicture: {
    url: string;
  };
}
