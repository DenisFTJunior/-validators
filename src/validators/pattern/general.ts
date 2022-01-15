import { fOut } from "../../schema/f";

const patternMatch = (pattern) => (value, config):fOut => {
  const regex = RegExp(pattern);
  const result = regex.test(value);
  return {
    result,
    msg: result
      ? null
      : config?.personalizedMessage?.patternMatch || "Pattern not match",
  };
};

export default patternMatch
