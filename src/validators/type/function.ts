import { Config } from "../../schema/config/Config";
import { fOut } from "../../schema/f";

const isFunction = (x: any, { personalizedMessage }: Config): fOut => {
  const result = typeof x === "function";
  return {
    result,
    msg: result ? undefined : personalizedMessage?.isFunction ||"Not function",
  };
};

export default isFunction;
