import { Config } from "../../schema/config/Config";
import { fOut } from "../../schema/f";

const patternMatch =
  (pattern: any) =>
  (value: any, config?: Config): fOut => {
    const regex = RegExp(pattern);
    const result = regex.test(value);
    return {
      result: !result || false,
      msg: result
        ? undefined
        : config?.personalizedMessage?.patternMatch || "Pattern not match",
    };
  };

export default patternMatch;
