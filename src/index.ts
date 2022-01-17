import _Validate from "./validators/helpers/Validate";
import _ValidateForm from "./validators/helpers/ValidateForm";
import _Match from "./validators/helpers/Match";
import _isArray from "./validators/type/array";
import _isNumber from "./validators/type/number";
import _isString from "./validators/type/string";
import _isBoolean from "./validators/type/boolean";
import _isFunction from "./validators/type/function";
import _isObject from "./validators/type/object";
import _isEmailValid from "./validators/pattern/email";
import _isPhoneValid from "./validators/pattern/phone";
import _patternMatch from "./validators/pattern/general";
import _isPasswordValid from "./validators/pattern/password";

export const Validate = _Validate;
export const ValidateForm = _ValidateForm;
export const Match = _Match;

export const isArray = _isArray;
export const isNumber = _isNumber;
export const isString = _isString;
export const isBoolean = _isBoolean;
export const isFunction = _isFunction;
export const isObject = _isObject;

export const isEmailValid = _isEmailValid;
export const patternMatch = _patternMatch;
export const isPhoneValid = _isPhoneValid;
export const isPasswordValid = _isPasswordValid;
