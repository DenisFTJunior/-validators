import _Validate from "./validators/helpers/Validate.js";
import _ValidateForm from "./validators/helpers/ValidateForm.js";
import _Match from "./validators/helpers/Match.js";
import _isArray from "./validators/type/array.js";
import _isNumber from "./validators/type/number.js";
import _isString from "./validators/type/string.js";
import _isBoolean from "./validators/type/boolean.js";
import _isFunction from "./validators/type/function.js";
import _isObject from "./validators/type/object.js";
import _isEmailValid from "./validators/pattern/email.js";
import _isPhoneValid from "./validators/pattern/phone.js";
import _patternMatch from "./validators/pattern/general.js";
import _isPasswordValid from "./validators/pattern/password.js";

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
