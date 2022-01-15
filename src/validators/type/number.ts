import { fOut } from "../../schema/f";

const isNumber = (x: any, config): fOut => {
    const result = typeof x === "number";
    return {
      result,
      msg: result ? null : config?.personalizedMessage?.isNumber || "Not number",
    };
  };

export default isNumber;
