import { Config } from "../../schema/config/Config.js";
import { fOut } from "../../schema/f.js";

const isNumber = (x: any, { personalizedMessage }: Config): fOut => {
    const result = typeof x === "number";
    return {
      result,
      msg: result ? undefined : personalizedMessage?.isNumber || "Not number",
    };
  };

export default isNumber;
