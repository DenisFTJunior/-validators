import _Validate from "./src/validators/helpers/Validate.js";
import _ValidateForm from "./src/validators/helpers/ValidateForm.js";
import _Match from "./src/validators/helpers/Match.js";
import _isArray from "./src/validators/type/array.js";
import _isNumber from "./src/validators/type/number.js";
import _isString from "./src/validators/type/string.js";
import _isBoolean from "./src/validators/type/boolean.js";
import _isFunction from "./src/validators/type/function.js";
import _isObject from "./src/validators/type/object.js";
import _isEmailValid from "./src/validators/pattern/email.js";
import _isPhoneValid from "./src/validators/pattern/phone.js";
import _patternMatch from "./src/validators/pattern/general.js";
import _isPasswordValid from "./src/validators/pattern/password.js";

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
