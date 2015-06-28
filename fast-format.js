/**
 * @preserve fast-format.js (C) 2015 KNOWLEDGECODE | MIT
 */
(function (global) {
    'use strict';

    var f = function (format) {
        var i, len, argc = arguments.length, v = (format + '').split('%s'), r = argc ? v[0] : '';
        for (i = 1, len = v.length, argc--; i < len; i++) {
            r += (i > argc ? '%s' : arguments[i]) + v[i];
        }
        return r;
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = f;
    } else if (typeof global.define === 'function' && global.define.amd) {
        global.define([], function () {
            return f;
        });
    } else {
        global.format = f;
    }

}(this));

