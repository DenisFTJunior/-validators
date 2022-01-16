import { Config } from "../../schema/config/Config.js";
import { fOut } from "../../schema/f.js";

const isEmailValid = (
  value: any,
  { isEmailValid, personalizedMessage }: Config
): fOut => {
  const PATTERN =
    isEmailValid?.regexPersonalized ||
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const regex = new RegExp(PATTERN);
  const result = regex.test(value);
  return {
    result,
    msg: result
      ? undefined
      : personalizedMessage?.isEmailValid || "Invalid email",
  };
};

export default isEmailValid;
