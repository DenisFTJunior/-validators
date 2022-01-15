import { fOut } from "../../schema/f";

const isEmailValid = (value, config): fOut => {
  const PATTERN =
    config.isEmailValid.regexPersonalized ||
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const regex = new RegExp(PATTERN);
  const result = regex.test(value);
  return {
    result,
    msg: result
      ? null
      : config?.personalizedMessage?.isEmailValid || "Invalid email",
  };
};

export default isEmailValid;
