export interface MatchObject {
  pred: boolean;
  f: Function;
}

export interface MatchReturnObject {
  pred: boolean;
  data: {};
}

export interface MatchSchema {
  matching: (x: MatchObject) => MatchSchema;
  matchStop: (x: MatchObject) => MatchSchema;
  matchReturn:(x: MatchReturnObject) => any;
  end: () => void;
}
