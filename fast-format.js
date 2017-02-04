/**
 * @preserve fast-format.js (C) KNOWLEDGECODE | MIT
 */
(function (global) {
    'use strict';

    var f = function (format) {
        var argc = arguments.length, v = (argc ? format + '' : '').split('%s'), i = 1, len = v.length, r = v[0];
        if (argc > len) {
            argc = len;
        }
        while (i < argc) {
            r += arguments[i] + v[i++];
        }
        while (i < len) {
            r += '%s' + v[i++];
        }
        return r;
    };

    f.compile = function (format) {
        var v = (arguments.length ? format + '' : '').split('%s'), len = v.length;
        return function () {
            var i = 0, argc = arguments.length, r = v[0];
            if (argc > len - 1) {
                argc = len - 1;
            }
            while (i < argc) {
                r += arguments[i] + v[++i];
            }
            i++;
            while (i < len) {
                r += '%s' + v[i++];
            }
            return r;
        };
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

