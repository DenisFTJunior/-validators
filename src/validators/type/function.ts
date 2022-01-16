import { Config } from "../../schema/config/Config.js";
import { fOut } from "../../schema/f.js";

const isFunction = (x: any, { personalizedMessage }: Config): fOut => {
  const result = typeof x === "function";
  return {
    result,
    msg: result ? undefined : personalizedMessage?.isFunction ||"Not function",
  };
};

export default isFunction;
