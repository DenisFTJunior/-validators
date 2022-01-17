"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var Validate = function (_a) {
    var _b = _a.x, x = _b === void 0 ? [] : _b, config = _a.config;
    return ({
        get: function () { return x; },
        set: function (_a) {
            var f = _a.f, value = _a.value, refs = _a.refs;
            var _b = f(value, config), result = _b.result, msg = _b.msg;
            return Validate({ x: __spreadArray(__spreadArray([], x, true), [{ result: result, msg: msg, refs: refs }], false) });
        }
    });
};
exports["default"] = Validate;
