import { Config } from "./config/Config";
import { fOut } from "./f";

export interface ValidateObject {
  refs?: HTMLElement;
  value: any;
  f: (value: any, config?: Config) => fOut;
}

export interface ValidateSchema {
  get: () => fOut[] | [];
  set: (x: ValidateObject) => ValidateSchema;
}

export interface ValidateInput {
  x?: fOut[] | [];
  config?: Config;
}
