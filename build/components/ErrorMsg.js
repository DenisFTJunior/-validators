"use strict";
exports.__esModule = true;
exports.ErrorMsg = void 0;
var ErrorMsg = function (refs, _a, msg) {
    var warning = _a.warning;
    if (document.querySelector("#error-fast-validators-handler"))
        return {};
    var span = document.createElement("span");
    span.id = "error-fast-validators-handler";
    refs.style.borderColor = (warning === null || warning === void 0 ? void 0 : warning.color) || "#ff726f";
    span.innerText = msg ? msg : "";
    generateStyle(span, warning || {});
    refs.appendChild(span);
};
exports.ErrorMsg = ErrorMsg;
var generateStyle = function (el, warning) {
    el.style.color = warning.color || "#ff726f";
    el.style.display = "flex";
    el.style.textAlign = "center";
    el.style.margin = "0.5rem";
    el.style.fontSize = warning.size || "1rem";
};
