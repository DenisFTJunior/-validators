import { fOut } from "../../schema/f";

const patternMatch =
  (pattern) =>
  (value, { personalizedMessage }): fOut => {
    const regex = RegExp(pattern);
    const result = regex.test(value);
    return {
      result,
      msg: result
        ? null
        : personalizedMessage?.patternMatch || "Pattern not match",
    };
  };

export default patternMatch;
