"use strict";
exports.__esModule = true;
var isBoolean = function (x, _a) {
    var personalizedMessage = _a.personalizedMessage;
    var result = typeof x === "boolean";
    return {
        result: result,
        msg: result ? undefined : (personalizedMessage === null || personalizedMessage === void 0 ? void 0 : personalizedMessage.isBoolean) || "Not boolean"
    };
};
exports["default"] = isBoolean;
