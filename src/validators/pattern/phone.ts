import { Config } from "../../schema/config/Config.js";
import { fOut } from "../../schema/f.js";
import Match from "../helpers/Match.js";

const isPhoneValid = (
  value: any,
  { isPhoneValid, personalizedMessage }: Config
): fOut => {
  const COUNTRYCODE_PATTERN = /^+(?=*\d){2,4}/;
  const PHONE_PATERN = /(?=*\d){9,15}/;

  const regexFactory = (pattern: any) => new RegExp(pattern);

  const hasCountryCode = regexFactory(COUNTRYCODE_PATTERN).test(value);
  const isValid = regexFactory(PHONE_PATERN).test(value);

  const { result, msg } = Match()
    .matchReturn({
      pred: isPhoneValid?.desativeCountryCode ? false : hasCountryCode,
      f: () => ({
        msg: "Country code is required ",
        result: true,
      }),
    })
    .matchReturn({
      pred: isValid,
      f: () => ({
        msg: "Invalid phone",
        result: true,
      }),
    })
    .end();

  return {
    result,
    msg: result ? null : personalizedMessage?.isPhoneValid || msg,
  };
};

export default isPhoneValid;
