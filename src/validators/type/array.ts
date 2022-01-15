import { fOut } from "../../schema/f";

const isArray = (x: any, config): fOut => {
  const result = Array.isArray(x);
  return {
    result,
    msg: result ? null :config?.personalizedMessage?.isArray || "Not array",
  };
};

export default isArray;
