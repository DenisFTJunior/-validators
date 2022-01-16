import { IsEmailValid } from "./isValid/email.js";
import { IsPasswordValid } from "./isValid/password.js";
import { isPhoneValid } from "./isValid/phone.js";
import { PersonalizedMessage } from "./personalizedMessage.js";
import { Warning } from "./warning.js";

export interface Config {
  warning?: Warning;
  personalizedMessage?: PersonalizedMessage;
  isPasswordValid?: IsPasswordValid;
  isPhoneValid?: isPhoneValid;
  isEmailValid?: IsEmailValid;
}
