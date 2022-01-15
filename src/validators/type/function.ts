import { fOut } from "../../schema/f";

const isFunction = (x: any, config): fOut => {
  const result = typeof x === "function";
  return {
    result,
    msg: result ? null : config?.personalizedMessage?.isFunction || "Not function",
  };
};

export default isFunction;
