import { fOut } from "../../schema/f";

const isString = (x: any, config): fOut => {
  const result = typeof x === "string";
  return {
    result,
    msg: result ? null : config?.personalizedMessage?.isString || "Not string",
  };
};

export default isString;
