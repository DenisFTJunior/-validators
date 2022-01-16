import { Config } from "../../schema/config/Config.js";
import { fOut } from "../../schema/f.js";

const isObject = (x: any, { personalizedMessage }: Config): fOut => {
    const result = typeof x === "object";
    return {
      result,
      msg: result ? undefined : personalizedMessage?.isObject || "Not object",
    };
  };

export default isObject;
