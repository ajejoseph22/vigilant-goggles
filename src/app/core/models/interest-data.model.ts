export interface InterestItem {
  image: string;
  title: string;
  subInterests?: Interests;
}

export interface Interests {
  [id: string]: InterestItem;
}
