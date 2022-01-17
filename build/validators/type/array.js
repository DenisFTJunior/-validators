"use strict";
exports.__esModule = true;
var isArray = function (x, _a) {
    var personalizedMessage = _a.personalizedMessage;
    var result = Array.isArray(x);
    return {
        result: result,
        msg: result ? undefined : (personalizedMessage === null || personalizedMessage === void 0 ? void 0 : personalizedMessage.isArray) || "Not array"
    };
};
exports["default"] = isArray;
