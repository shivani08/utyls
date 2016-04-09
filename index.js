"use strict";
var utyls = (function () {
    function utyls() {
    }
    utyls.prototype.add = function (first, second) {
        return first + second;
    };
    return utyls;
}());
module.exports = utyls;
