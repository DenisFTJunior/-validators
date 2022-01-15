import { fOut } from "../../schema/f";

const isBoolean = (x: any, config): fOut => {
  const result = typeof x === "boolean";
  return {
    result,
    msg: result ? null : config?.personalizedMessage?.isBoolean || "Not boolean",
  };
};

export default isBoolean;
