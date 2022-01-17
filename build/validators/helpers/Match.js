"use strict";
exports.__esModule = true;
var StopMatch = function (status) { return ({
    matching: function () { return StopMatch(status); },
    matchStop: function () { return StopMatch(status); },
    matchReturn: function () { return StopMatch(status); },
    end: function () { return status; }
}); };
var MatchReturn = function (data) { return ({
    matching: function () { return MatchReturn(data); },
    matchStop: function () { return MatchReturn(data); },
    matchReturn: function () { return MatchReturn(data); },
    end: function () { return data; }
}); };
var Match = function (status) { return ({
    matching: function (_a) {
        var pred = _a.pred, f = _a.f;
        if (pred)
            f();
        return Match(false);
    },
    matchStop: function (_a) {
        var pred = _a.pred, f = _a.f;
        if (status)
            return StopMatch(status);
        if (pred)
            f();
        var newStatus = pred ? true : false;
        return Match(newStatus);
    },
    matchReturn: function (_a) {
        var pred = _a.pred, data = _a.data;
        if (pred)
            return MatchReturn(data);
        return Match(false);
    },
    end: function () { return status; }
}); };
exports["default"] = Match;
