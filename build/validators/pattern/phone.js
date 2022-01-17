"use strict";
exports.__esModule = true;
var Match_1 = require("../helpers/Match");
var isPhoneValid = function (value, config) {
    var _a, _b;
    var COUNTRYCODE_PATTERN = /^\(?\+[0-9]{1,3}\)?/;
    var PHONE_PATERN = /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?/;
    var regexFactory = function (pattern) { return new RegExp(pattern); };
    var hasCountryCode = regexFactory(COUNTRYCODE_PATTERN).test(value);
    var isValid = regexFactory(PHONE_PATERN).test(value);
    var _c = (0, Match_1["default"])()
        .matchReturn({
        pred: ((_a = config === null || config === void 0 ? void 0 : config.isPhoneValid) === null || _a === void 0 ? void 0 : _a.desativeCountryCode) ? false : !hasCountryCode,
        data: {
            msg: "Country code is required ",
            result: true
        }
    })
        .matchReturn({
        pred: !isValid,
        data: {
            msg: "Invalid phone",
            result: true
        }
    })
        .end(), result = _c.result, msg = _c.msg;
    console.log("hasCountryCode", hasCountryCode);
    return {
        result: result || false,
        msg: !result ? undefined : ((_b = config === null || config === void 0 ? void 0 : config.personalizedMessage) === null || _b === void 0 ? void 0 : _b.isPhoneValid) || msg
    };
};
exports["default"] = isPhoneValid;
