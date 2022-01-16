import { Config } from "../../schema/config/Config.js";
import { fOut } from "../../schema/f.js";

const isString = (x: any, { personalizedMessage }: Config): fOut => {
  const result = typeof x === "string";
  return {
    result,
    msg: result ? undefined : personalizedMessage?.isString || "Not string",
  };
};

export default isString;
