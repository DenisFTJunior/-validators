"use strict";
exports.__esModule = true;
var patternMatch = function (pattern) {
    return function (value, config) {
        var _a;
        var regex = RegExp(pattern);
        var result = regex.test(value);
        return {
            result: !result || false,
            msg: result
                ? undefined
                : ((_a = config === null || config === void 0 ? void 0 : config.personalizedMessage) === null || _a === void 0 ? void 0 : _a.patternMatch) || "Pattern not match"
        };
    };
};
exports["default"] = patternMatch;
