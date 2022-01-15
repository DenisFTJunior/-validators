import isArray from "./array";
import isString from "./string";
import isNumber from "./number";
import isFunction from "./function";
import isObject from "./object";
import isBoolean from "./boolean";

const typeValidators = () => ({
  isArray,
  isString,
  isNumber,
  isFunction,
  isObject,
  isBoolean,
});

export default typeValidators;
