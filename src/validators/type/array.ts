import { Config } from "../../schema/config/Config";
import { fOut } from "../../schema/f";

const isArray = (x: any, { personalizedMessage }: Config): fOut => {
  const result = Array.isArray(x);
  return {
    result,
    msg: result ? undefined : personalizedMessage?.isArray || "Not array",
  };
};

export default isArray;
