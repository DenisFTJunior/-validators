import { MatchObject, MatchSchema } from "../../schema/Match";

const StopMatch = (status: boolean): MatchSchema => ({
  matching: () => StopMatch(status),
  matchStop: () => StopMatch(status),
  end: () => {},
});

const Match = (status: boolean): MatchSchema => ({
  matching: ({ pred, f }: MatchObject) => {
    if (pred) f();
    return Match(true);
  },
  matchStop: ({ pred, f }: MatchObject) => {
    if (status) return StopMatch(status);
    if (pred) f();
    const newStatus = pred ? true : false;
    return Match(newStatus);
  },
  end: () => {},
});

export default Match
