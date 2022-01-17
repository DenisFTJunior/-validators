"use strict";
exports.__esModule = true;
var ErrorMsg_1 = require("../../components/ErrorMsg");
var ValidateForm = function (_a) {
    var x = _a.x, config = _a.config;
    return ({
        get: function () { return x; },
        set: function (_a) {
            var _b, _c, _d;
            var f = _a.f, value = _a.value, refs = _a.refs;
            var _e = f(value, config), result = _e.result, msg = _e.msg;
            if (!result)
                (0, ErrorMsg_1.ErrorMsg)(refs, config ? config : {}, msg);
            if (refs.style.borderColor === (((_b = config === null || config === void 0 ? void 0 : config.warning) === null || _b === void 0 ? void 0 : _b.color) || "#ff726f")) {
                refs.style.borderColor = ((_c = config === null || config === void 0 ? void 0 : config.style) === null || _c === void 0 ? void 0 : _c.defaultBorderColor) || "#c4c4c4";
                refs.style.color = ((_d = config === null || config === void 0 ? void 0 : config.style) === null || _d === void 0 ? void 0 : _d.defaultColor) || "#c4c4c4";
            }
            return ValidateForm({ x: x || result });
        }
    });
};
exports["default"] = ValidateForm;
