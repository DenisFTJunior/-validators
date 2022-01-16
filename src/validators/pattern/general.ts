import { Config } from "../../schema/config/Config.js";
import { fOut } from "../../schema/f.js";

const patternMatch =
  (pattern: any) =>
  (value: any, { personalizedMessage }: Config): fOut => {
    const regex = RegExp(pattern);
    const result = regex.test(value);
    return {
      result,
      msg: result
        ? undefined
        : personalizedMessage?.patternMatch || "Pattern not match",
    };
  };

export default patternMatch;
