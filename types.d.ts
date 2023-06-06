export interface memSkeletonType {
  insta: string;
  linkedIn: string;
  name: string;
  profilePicture: {
    url: string;
  };
}

export interface MemDeetsType {
  memDeetsProp: {
    alumini: memSkeletonType[];
    members: memSkeletonType[];
    heads: memSkeletonType[];
  };
}

export interface clubLinksType {
  clubInsta: string;
  clubLinkedin: string;
  tvTalkiesLink: string;
  phoneOne: string;
  phoneTwo: string;
}
