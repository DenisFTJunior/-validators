"use strict";
exports.__esModule = true;
var isEmailValid = function (value, config) {
    var _a, _b;
    var PATTERN = ((_a = config === null || config === void 0 ? void 0 : config.isEmailValid) === null || _a === void 0 ? void 0 : _a.regexPersonalized) ||
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,5}[a-zA-Z0-9])?)*$/;
    var regex = new RegExp(PATTERN);
    var result = regex.test(value);
    return {
        result: !result,
        msg: result
            ? undefined
            : ((_b = config === null || config === void 0 ? void 0 : config.personalizedMessage) === null || _b === void 0 ? void 0 : _b.isEmailValid) || "Invalid email"
    };
};
exports["default"] = isEmailValid;
