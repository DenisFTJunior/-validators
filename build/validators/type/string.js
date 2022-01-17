"use strict";
exports.__esModule = true;
var isString = function (x, _a) {
    var personalizedMessage = _a.personalizedMessage;
    var result = typeof x === "string";
    return {
        result: result,
        msg: result ? undefined : (personalizedMessage === null || personalizedMessage === void 0 ? void 0 : personalizedMessage.isString) || "Not string"
    };
};
exports["default"] = isString;
