"use strict";
exports.__esModule = true;
var isNumber = function (x, _a) {
    var personalizedMessage = _a.personalizedMessage;
    var result = typeof x === "number";
    return {
        result: result,
        msg: result ? undefined : (personalizedMessage === null || personalizedMessage === void 0 ? void 0 : personalizedMessage.isNumber) || "Not number"
    };
};
exports["default"] = isNumber;
