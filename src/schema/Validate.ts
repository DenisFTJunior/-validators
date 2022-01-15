import { Config } from "./Config";
import { fOut } from "./f";

export interface ValidateObject {
  refs: HTMLElement;
  value: any;
  f: (value: any, config?: Object) => fOut;
}

export interface ValidateSchema {
  get: () => void;
  set: (x: ValidateObject) => ValidateSchema;
}

export interface ValidateInput {
  x?: boolean;
  config?: Config;
}
