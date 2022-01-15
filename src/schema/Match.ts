export interface MatchObject {
  pred: boolean;
  f: Function;
}

export interface MatchSchema {
  matching: (x: MatchObject) => MatchSchema;
  matchStop: (x: MatchObject) => MatchSchema;
  end: () => void;
}
