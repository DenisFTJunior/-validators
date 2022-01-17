import { IsEmailValid } from "./isValid/email";
import{IsPasswordValid } from "./isValid/password";
import { isPhoneValid } from "./isValid/phone";
import { PersonalizedMessage } from "./personalizedMessage";
import { Style } from "./style";
import { Warning } from "./warning";

export interface Config {
  warning?: Warning;
  personalizedMessage?: PersonalizedMessage;
  isPasswordValid?: IsPasswordValid;
  isPhoneValid?: isPhoneValid;
  isEmailValid?: IsEmailValid;
  style?: Style;
}
