import { Config } from "../../schema/config/Config.js";
import { fOut } from "../../schema/f.js";
import Match from "../helpers/Match.js";

const isPasswordValid = (value: any, config?: Config): fOut => {
  const UPPERCASE_PATTERN = /(?=.*[A-Z])/;
  const LETTER_PATTERN = /(?=.*[a-z])/;
  const SPECIALCHAR_PATTERN = /(?=.*[$*&@#])/;
  const NUMBER_PATTERN = /(?=.*\d)/;
  const MIN_CHAR_PATTERN = /[0-9a-zA-Z$*&@#]{8,}/;
  console.log(MIN_CHAR_PATTERN)
  const regexFactory = (pattern: any) => new RegExp(pattern);

  const hasUppercase = regexFactory(UPPERCASE_PATTERN).test(value);
  const hasMinChar = regexFactory(MIN_CHAR_PATTERN).test(value);
  const hasNumber = regexFactory(NUMBER_PATTERN).test(value);
  const hasSpecialChar = regexFactory(SPECIALCHAR_PATTERN).test(value);
  const hasLetter = regexFactory(LETTER_PATTERN).test(value);

  const { result, msg } = Match()
    .matchReturn({
      pred: config?.isPasswordValid?.desativeUpperCase ? false : !hasUppercase,
      data: {
        msg: "At least one uppercase letter is required ",
        result: true,
      },
    })
    .matchReturn({
      pred: !hasMinChar,
      data: {
        msg: `At least 8 characters are required `,
        result: true,
      },
    })
    .matchReturn({
      pred: config?.isPasswordValid?.desativeNumber ? false : !hasNumber,
      data: {
        msg: "At least one Number is required ",
        result: true,
      },
    })
    .matchReturn({
      pred: config?.isPasswordValid?.desativeSpecialSymbol
        ? false
        : !hasSpecialChar,
      data: {
        msg: "At least one special char is required ",
        result: true,
      },
    })
    .matchReturn({
      pred: config?.isPasswordValid?.desativeLetter ? false : !hasLetter,
      data: {
        msg: "At least one smallcase letter is required ",
        result: true,
      },
    })
    .end();

  return {
    result: result || false,
    msg: !result ? undefined : config?.personalizedMessage?.isPasswordValid || msg,
  };
};

export default isPasswordValid;
