import { IsPasswordValid } from "./isValid/password";
import { isPhoneValid } from "./isValid/phone";
import { PersonalizedMessage } from "./personalizedMessage";
import { Warning } from "./warning";

export interface Config {
  warning: Warning;
  personalizedMessage: PersonalizedMessage;
  isPasswordValid: IsPasswordValid;
  isPhoneValid: isPhoneValid;
  isEmailValid: {
    regexPersonalized: string;
  };
}
