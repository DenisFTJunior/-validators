import { Config } from "./config/Config.js";
import { fOut } from "./f.js";

export interface ValidateFormObject {
  refs: HTMLElement;
  value: any;
  f: (value: any, config?: Object) => fOut;
}

export interface ValidateFormSchema {
  get: () => void;
  set: (x: ValidateFormObject) => ValidateFormSchema;
}

export interface ValidateFormInput {
  x?: boolean;
  config?: Config;
}
