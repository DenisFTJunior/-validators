import { fOut } from "../../schema/f";

const isObject = (x: any, config): fOut => {
    const result = typeof x === "object";
    return {
      result,
      msg: result ? null : config?.personalizedMessage?.isObject || "Not object",
    };
  };

export default isObject;
