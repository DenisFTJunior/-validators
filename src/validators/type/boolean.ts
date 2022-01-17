import { Config } from "../../schema/config/Config";
import { fOut } from "../../schema/f";

const isBoolean = (x: any, { personalizedMessage }: Config): fOut => {
  const result = typeof x === "boolean";
  return {
    result,
    msg: result ? undefined : personalizedMessage?.isBoolean || "Not boolean",
  };
};

export default isBoolean;
