"use strict";
var utyls = (function () {
    function utyls() {
    }
    utyls.prototype.leftpad = function (str, len, paddingChar) {
        if (paddingChar === void 0) { paddingChar = '*'; }
        str = String(str);
        var checkValues = true;
        try {
            //TypeChecking of individual parameters    
            if (Number.isInteger(len) === false) {
                checkValues &= false;
                throw "Required length is not an integer, please correct the 2nd parameter";
            }
            if (this.isChar(paddingChar) === false) {
                checkValues &= false;
                throw "Padding character is not a character, please correct 3rd parameter";
            }
            if (checkValues) {
                while (str.length != len)
                    str = paddingChar + str;
                return str;
            }
            else {
                return undefined;
            }
        }
        catch (err) {
            console.log("ERROR: " + err);
        }
    };
    utyls.prototype.isChar = function (charVal) {
        return charVal.length === 1 && (charVal instanceof String) === false;
    };
    return utyls;
}());
module.exports = utyls;