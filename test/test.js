(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        format = global.format || require('../fast-format');

    describe('format', function () {
        it('1 replace', function () {
            expect(format('%s', 'hello')).to.eql('hello');
        });
        it('2 insert', function () {
            expect(format('%shello', 'hello')).to.eql('hellohello');
        });
        it('3 append', function () {
            expect(format('hello%s', 'hello')).to.eql('hellohello');
        });
        it('4 insert2', function () {
            expect(format('hello%shello', 'hello')).to.eql('hellohellohello');
        });
        it('5 join', function () {
            expect(format('%s%s', 'he', 'llo')).to.eql('hello');
        });
        it('6 replace2', function () {
            expect(format(' %s %s ', 'he', 'llo')).to.eql(' he llo ');
        });
        it('7 %s', function () {
            expect(format('%s', '%s')).to.eql('%s');
        });
        it('8 number', function () {
            expect(format('%s', 100)).to.eql('100');
        });
        it('9 boolean', function () {
            expect(format('%s', true)).to.eql('true');
        });
        it('10 date', function () {
            expect(format('%s', new Date(2015, 5, 28))).to.contain('Sun Jun 28 2015 00:00:00');
        });
        it('11 array', function () {
            expect(format('%s', [1, 2, 3])).to.eql('1,2,3');
        });
        it('12 object', function () {
            expect(format('%s', { key: 'value' })).to.eql('[object Object]');
        });
        it('13 NaN', function () {
            expect(format('%s', NaN)).to.eql('NaN');
        });
        it('14 function', function () {
            expect(format('%s', function () {})).to.eql('function () {}');
        });
        it('15 null', function () {
            expect(format('%s', null)).to.eql('null');
        });
        it('16 undefined', function () {
            expect(format('%s', undefined)).to.eql('undefined');
        });
        it('17 excess', function () {
            expect(format('%s %s %s %s', '1', '2', '3', '4', '5')).to.eql('1 2 3 4');
        });
        it('18 deficiency', function () {
            expect(format('%s %s %s %s', '1', '2', '3')).to.eql('1 2 3 %s');
        });
        it('19 no values', function () {
            expect(format('%s %s %s %s')).to.eql('%s %s %s %s');
        });
        it('20 %', function () {
            expect(format('%')).to.eql('%');
        });
        it('21 empty', function () {
            expect(format()).to.eql('');
        });
        it('22 not supported', function () {
            expect(format('%d, %j', 10, { key: 'value' })).to.eql('%d, %j');
        });
    });

    describe('format.compile', function () {
        it('1 replace', function () {
            var f = format.compile('%s');
            expect(f('hello')).to.eql('hello');
        });
        it('2 insert', function () {
            var f = format.compile('%shello');
            expect(f('hello')).to.eql('hellohello');
        });
        it('3 append', function () {
            var f = format.compile('hello%s');
            expect(f('hello')).to.eql('hellohello');
        });
        it('4 insert2', function () {
            var f = format.compile('hello%shello');
            expect(f('hello')).to.eql('hellohellohello');
        });
        it('5 join', function () {
            var f = format.compile('%s%s');
            expect(f('he', 'llo')).to.eql('hello');
        });
        it('6 replace2', function () {
            var f = format.compile(' %s %s ');
            expect(f('he', 'llo')).to.eql(' he llo ');
        });
        it('7 %s', function () {
            var f = format.compile('%s');
            expect(f('%s')).to.eql('%s');
        });
        it('8 number', function () {
            var f = format.compile('%s');
            expect(f(100)).to.eql('100');
        });
        it('9 boolean', function () {
            var f = format.compile('%s');
            expect(f(true)).to.eql('true');
        });
        it('10 date', function () {
            var f = format.compile('%s');
            expect(f(new Date(2015, 5, 28))).to.contain('Sun Jun 28 2015 00:00:00');
        });
        it('11 array', function () {
            var f = format.compile('%s');
            expect(f([1, 2, 3])).to.eql('1,2,3');
        });
        it('12 object', function () {
            var f = format.compile('%s');
            expect(f({ key: 'value' })).to.eql('[object Object]');
        });
        it('13 NaN', function () {
            var f = format.compile('%s');
            expect(f(NaN)).to.eql('NaN');
        });
        it('14 function', function () {
            var f = format.compile('%s');
            expect(f(function () {})).to.eql('function () {}');
        });
        it('15 null', function () {
            var f = format.compile('%s');
            expect(f(null)).to.eql('null');
        });
        it('16 undefined', function () {
            var f = format.compile('%s');
            expect(f(undefined)).to.eql('undefined');
        });
        it('17 excess', function () {
            var f = format.compile('%s %s %s %s');
            expect(f('1', '2', '3', '4', '5')).to.eql('1 2 3 4');
        });
        it('18 deficiency', function () {
            var f = format.compile('%s %s %s %s');
            expect(f('1', '2', '3')).to.eql('1 2 3 %s');
        });
        it('19 no values', function () {
            var f = format.compile('%s %s %s %s');
            expect(f()).to.eql('%s %s %s %s');
        });
        it('20 %', function () {
            var f = format.compile('%');
            expect(f()).to.eql('%');
        });
        it('21 empty', function () {
            var f = format.compile();
            expect(f()).to.eql('');
        });
        it('22 not supported', function () {
            var f = format.compile('%d, %j');
            expect(f(10, { key: 'value' })).to.eql('%d, %j');
        });
    });

}(this));
