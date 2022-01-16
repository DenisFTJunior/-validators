import { Config } from "./config/Config.js";
import { fOut } from "./f.js";

export interface ValidateObject {
  refs: HTMLElement;
  value: any;
  f: (value: any, config?: Object) => fOut;
}

export interface ValidateSchema {
  get: () => fOut[] | [];
  set: (x: ValidateObject) => ValidateSchema;
}

export interface ValidateInput {
  x?: fOut[] | [];
  config?: Config;
}
