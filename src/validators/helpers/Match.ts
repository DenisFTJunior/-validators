import { MatchObject, MatchReturnObject, MatchSchema } from "../../schema/Match";

const StopMatch = (status?: boolean): MatchSchema => ({
  matching: () => StopMatch(status),
  matchStop: () => StopMatch(status),
  matchReturn: () => StopMatch(status),
  end: () => status,
});

const MatchReturn = (data: any): MatchSchema => ({
  matching: () => MatchReturn(data),
  matchStop: () => MatchReturn(data),
  matchReturn: () => MatchReturn(data),
  end: () => data,
});

const Match = (status?: boolean): MatchSchema => ({
  matching: ({ pred, f }: MatchObject) => {
    if (pred) f();
    return Match(false);
  },
  matchStop: ({ pred, f }: MatchObject) => {
    if (status) return StopMatch(status);
    if (pred) f();
    const newStatus = pred ? true : false;
    return Match(newStatus);
  },
  matchReturn: ({ pred, data }: MatchReturnObject) => {
    if (pred) return MatchReturn(data);
    return Match(false);
  },
  end: () => status,
});

export default Match;
