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
