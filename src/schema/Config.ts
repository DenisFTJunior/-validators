export interface Config {
  warning: {
    color: string;
    size: string;
  };
  personalizedMessage: {
    isArray: string;
    isNumber: string;
    isBoolean: string;
    isFunction: string;
    isObject: string;
    isString: string;
    isValidEmail: string;
    isValidPhone: string;
    isValidPassword: string;
    patternMatch: string;
  };
  isValidPassword: {
    regexPersonalized: string;
    upperCase: boolean;
    specialSymbol: boolean;
    number: boolean;
  };
  isValidPhone: {
    regexPersonalized: string;
  };
  isValidEmail: {
    regexPersonalized: string;
  };
}
