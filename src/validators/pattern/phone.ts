import { Config } from "../../schema/config/Config";
import { fOut } from "../../schema/f";
import Match from "../helpers/Match";

const isPhoneValid = (value: any, config?: Config): fOut => {
  const COUNTRYCODE_PATTERN = /^\(?\+[0-9]{1,3}\)?/;
  const PHONE_PATERN =
    /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?/;

  const regexFactory = (pattern: any) => new RegExp(pattern);

  const hasCountryCode = regexFactory(COUNTRYCODE_PATTERN).test(value);
  const isValid = regexFactory(PHONE_PATERN).test(value);

  const { result, msg } = Match()
    .matchReturn({
      pred: config?.isPhoneValid?.desativeCountryCode ? false : !hasCountryCode,
      data: {
        msg: "Country code is required ",
        result: true,
      },
    })
    .matchReturn({
      pred: !isValid,
      data: {
        msg: "Invalid phone",
        result: true,
      },
    })
    .end();
  console.log("hasCountryCode", hasCountryCode);

  return {
    result: result || false,
    msg: !result ? undefined : config?.personalizedMessage?.isPhoneValid || msg,
  };
};

export default isPhoneValid;
