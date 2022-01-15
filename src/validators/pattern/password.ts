import { fOut } from "../../schema/f";
import Match from "../helpers/Match";

const isPasswordValid = (value, config): fOut => {
  const UPPERCASE_PATTERN = /^(?=.*[A-Z])$/;
  const LETTER_PATTERN = /^(?=.*[a-z])$/;
  const SPECIALCHAR_PATTERN = /^(?=.*[$*&@#])$/;
  const NUMBER_PATTERN = /^(?=.*\d)$/;
  const MIN_CHAR_PATTERN = `/^[0-9a-zA-Z$*&@#]{${
    config?.isValidPassword?.minChar || 8
  },}$/`;

  const regexFactory = (pattern) => new RegExp(pattern);

  const hasUppercase = regexFactory(UPPERCASE_PATTERN).test(value);
  const hasMinChar = regexFactory(MIN_CHAR_PATTERN).test(value);
  const hasNumber = regexFactory(NUMBER_PATTERN).test(value);
  const hasSpecialChar = regexFactory(SPECIALCHAR_PATTERN).test(value);
  const hasLetter = regexFactory(LETTER_PATTERN).test(value);

  const { result, msg } = Match()
    .matchReturn({
      pred: config.isValidPassword.desativeUpperCase ? false : hasUppercase,
      f: () => ({
        msg: "At least one uppercase letter is required ",
        result: true,
      }),
    })
    .matchReturn({
      pred: hasMinChar,
      f: () => ({
        msg: `At least  ${
          config?.isValidPassword?.minChar || "8"
        } charecters are required `,
        result: true,
      }),
    })
    .matchReturn({
      pred: config.isValidPassword.desativeNumber ? false : hasNumber,
      f: () => ({
        msg: "At least one Number is required ",
        result: true,
      }),
    })
    .matchReturn({
      pred: config.isValidPassword.desativeSpecialSymbol
        ? false
        : hasSpecialChar,
      f: () => ({
        msg: "At least one special char is required ",
        result: true,
      }),
    })
    .matchReturn({
      pred: config.isValidPassword.desativeLetter ? false : hasLetter,
      f: () => ({
        msg: "At least one smallcase letter is required ",
        result: true,
      }),
    })
    .end();

  return {
    result,
    msg: result ? null : msg,
  };
};

export default isPasswordValid;
