"use strict";
exports.__esModule = true;
var ErrorMsg_1 = require("../../components/ErrorMsg");
var ValidateForm = function (_a) {
    var x = _a.x, config = _a.config;
    return ({
        get: function () { return x; },
        set: function (_a) {
            var _b, _c, _d, _e, _f;
            var f = _a.f, value = _a.value, refs = _a.refs;
            var _g = f(value, config), result = _g.result, msg = _g.msg;
            if (!result)
                (0, ErrorMsg_1.ErrorMsg)(refs, config ? config : {}, msg);
            if (((_b = refs === null || refs === void 0 ? void 0 : refs.style) === null || _b === void 0 ? void 0 : _b.borderColor) && ((_c = refs === null || refs === void 0 ? void 0 : refs.style) === null || _c === void 0 ? void 0 : _c.borderColor) === (((_d = config === null || config === void 0 ? void 0 : config.warning) === null || _d === void 0 ? void 0 : _d.color) || "#ff726f")) {
                refs.style.borderColor = ((_e = config === null || config === void 0 ? void 0 : config.style) === null || _e === void 0 ? void 0 : _e.defaultBorderColor) || "#c4c4c4";
                refs.style.color = ((_f = config === null || config === void 0 ? void 0 : config.style) === null || _f === void 0 ? void 0 : _f.defaultColor) || "#c4c4c4";
            }
            return ValidateForm({ x: x || result });
        }
    });
};
exports["default"] = ValidateForm;
