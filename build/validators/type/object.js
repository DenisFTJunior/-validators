"use strict";
exports.__esModule = true;
var isObject = function (x, _a) {
    var personalizedMessage = _a.personalizedMessage;
    var result = typeof x === "object";
    return {
        result: result,
        msg: result ? undefined : (personalizedMessage === null || personalizedMessage === void 0 ? void 0 : personalizedMessage.isObject) || "Not object"
    };
};
exports["default"] = isObject;
