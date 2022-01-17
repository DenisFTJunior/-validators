"use strict";
exports.__esModule = true;
var isFunction = function (x, _a) {
    var personalizedMessage = _a.personalizedMessage;
    var result = typeof x === "function";
    return {
        result: result,
        msg: result ? undefined : (personalizedMessage === null || personalizedMessage === void 0 ? void 0 : personalizedMessage.isFunction) || "Not function"
    };
};
exports["default"] = isFunction;
