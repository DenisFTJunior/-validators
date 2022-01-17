"use strict";
exports.__esModule = true;
var ErrorMsg_1 = require("../../../build/components/ErrorMsg");
var ValidateForm = function (_a) {
  var x = _a.x,
    config = _a.config;
  return {
    get: function () {
      return x;
    },
    set: function (_a) {
      var f = _a.f,
        value = _a.value,
        refs = _a.refs;
      var _b = f(value, config),
        result = _b.result,
        msg = _b.msg;
      if (!result) (0, ErrorMsg_1.ErrorMsg)(refs, config ? config : {}, msg);
      clean(refs, config);
      return ValidateForm({ x: x || result });
    },
  };
};
var clean = function (refs, config) {
  var _a, _b, _c, _d, _e;
  var child = document.querySelector("#error-fast-validators-handler");
  if (child) refs.removeChild(child);
  if (
    ((_a = refs === null || refs === void 0 ? void 0 : refs.style) === null ||
    _a === void 0
      ? void 0
      : _a.borderColor) &&
    ((_b = refs === null || refs === void 0 ? void 0 : refs.style) === null ||
    _b === void 0
      ? void 0
      : _b.borderColor) ===
      (((_c =
        config === null || config === void 0 ? void 0 : config.warning) ===
        null || _c === void 0
        ? void 0
        : _c.color) || "#ff726f")
  ) {
    refs.style.borderColor =
      ((_d = config === null || config === void 0 ? void 0 : config.style) ===
        null || _d === void 0
        ? void 0
        : _d.defaultBorderColor) || "#c4c4c4";
    refs.style.color =
      ((_e = config === null || config === void 0 ? void 0 : config.style) ===
        null || _e === void 0
        ? void 0
        : _e.defaultColor) || "#c4c4c4";
  }
};
exports["default"] = ValidateForm;
