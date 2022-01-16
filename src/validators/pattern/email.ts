import { Config } from "../../schema/config/Config.js";
import { fOut } from "../../schema/f.js";

const isEmailValid = (value: any, config?: Config): fOut => {
  const PATTERN =
    config?.isEmailValid?.regexPersonalized ||
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,5}[a-zA-Z0-9])?)*$/;
  const regex = new RegExp(PATTERN);
  const result = regex.test(value);
  return {
    result: !result,
    msg: result
      ? undefined
      : config?.personalizedMessage?.isEmailValid || "Invalid email",
  };
};

export default isEmailValid;
