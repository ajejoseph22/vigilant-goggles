export interface InterestItem {
  image: string;
  title: string;
  subInterests: SubInterests;
}

export interface Interests {
  [id: string]: InterestItem;
}

export interface SubInterestItem {
  image: string;
  title: string;
  subInterests: SubSubInterests;
}

export interface SubInterests {
  [id: string]: SubInterestItem;
}

export interface SubSubInterestItem {
  image: string;
  title: string;
}

export interface SubSubInterests {
  [id: string]: SubSubInterestItem;
}
