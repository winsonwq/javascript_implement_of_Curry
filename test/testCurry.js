var curryModule = require('../curry.js');
var curry = curryModule.curry;
var assert = require("assert");

describe('curry function', function () {
    var curriedAdd = curry(function (a, b, c) {
        return a + b + c;
    });
    describe('normal version function add(a, b, c) {return a+b+c};', function () {
        it('should return 6 when curriedAdd(1)(2)(3)', function () {
            assert.equal(6, curriedAdd(1)(2)(3));
        })

        it('should return 6 when curriedAdd(1，2)(3)', function () {
            var curriedAdd = curry(function (a, b, c) {
                return a + b + c;
            });
            assert.equal(6, curriedAdd(1, 2)(3));
        })
        it('should return 6 when curriedAdd(1，2, 3)', function () {
            var curriedAdd = curry(function (a, b, c) {
                return a + b + c;
            });
            assert.equal(6, curriedAdd(1, 2, 3));
        })
    })
    describe('upgrade version function add(a, b, c) {return a+b+c};', function () {
        it('should return 6 when curriedAdd(1,undefined,3)(2)', function () {
            assert.equal(6, curriedAdd(1, undefined, 3)(2));
        })
        it('should return 6 when curriedAdd(undefined,2,undefined)(1,3)', function () {
            assert.equal(6, curriedAdd(undefined, 2, undefined)(1, 3));
        })
    })
})