export interface Interest {
  id: string;
  image: string;
  title: string;
  subInterests: SubInterest[];
}

export interface SubInterest {
  id: string;
  title: string;
  subInterests: SubSubInterest[];
}

export interface SubSubInterest {
  id: string;
  title: string;
}
