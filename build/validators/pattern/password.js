"use strict";
exports.__esModule = true;
var Match_1 = require("../helpers/Match");
var isPasswordValid = function (value, config) {
    var _a, _b, _c, _d, _e;
    var UPPERCASE_PATTERN = /(?=.*[A-Z])/;
    var LETTER_PATTERN = /(?=.*[a-z])/;
    var SPECIALCHAR_PATTERN = /(?=.*[$*&@#])/;
    var NUMBER_PATTERN = /(?=.*\d)/;
    var MIN_CHAR_PATTERN = /[0-9a-zA-Z$*&@#]{8,}/;
    console.log(MIN_CHAR_PATTERN);
    var regexFactory = function (pattern) { return new RegExp(pattern); };
    var hasUppercase = regexFactory(UPPERCASE_PATTERN).test(value);
    var hasMinChar = regexFactory(MIN_CHAR_PATTERN).test(value);
    var hasNumber = regexFactory(NUMBER_PATTERN).test(value);
    var hasSpecialChar = regexFactory(SPECIALCHAR_PATTERN).test(value);
    var hasLetter = regexFactory(LETTER_PATTERN).test(value);
    var _f = (0, Match_1["default"])()
        .matchReturn({
        pred: ((_a = config === null || config === void 0 ? void 0 : config.isPasswordValid) === null || _a === void 0 ? void 0 : _a.desativeUpperCase) ? false : !hasUppercase,
        data: {
            msg: "At least one uppercase letter is required ",
            result: true
        }
    })
        .matchReturn({
        pred: !hasMinChar,
        data: {
            msg: "At least 8 characters are required ",
            result: true
        }
    })
        .matchReturn({
        pred: ((_b = config === null || config === void 0 ? void 0 : config.isPasswordValid) === null || _b === void 0 ? void 0 : _b.desativeNumber) ? false : !hasNumber,
        data: {
            msg: "At least one Number is required ",
            result: true
        }
    })
        .matchReturn({
        pred: ((_c = config === null || config === void 0 ? void 0 : config.isPasswordValid) === null || _c === void 0 ? void 0 : _c.desativeSpecialSymbol)
            ? false
            : !hasSpecialChar,
        data: {
            msg: "At least one special char is required ",
            result: true
        }
    })
        .matchReturn({
        pred: ((_d = config === null || config === void 0 ? void 0 : config.isPasswordValid) === null || _d === void 0 ? void 0 : _d.desativeLetter) ? false : !hasLetter,
        data: {
            msg: "At least one smallcase letter is required ",
            result: true
        }
    })
        .end(), result = _f.result, msg = _f.msg;
    return {
        result: result || false,
        msg: !result ? undefined : ((_e = config === null || config === void 0 ? void 0 : config.personalizedMessage) === null || _e === void 0 ? void 0 : _e.isPasswordValid) || msg
    };
};
exports["default"] = isPasswordValid;
