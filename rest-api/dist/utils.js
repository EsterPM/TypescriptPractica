"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInteger = isInteger;
//comprova si una cadena de text (string) conté només números enters positius (sense signes ni decimals).
function isInteger(input) {
    var _a;
    return (_a = input === null || input === void 0 ? void 0 : input.match(/^\d+$/)) !== null && _a !== void 0 ? _a : false;
}
