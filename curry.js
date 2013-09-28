function curry(fn) {

    var previousArgs =[];
    var returnFn = function () {
        debugger;
        var currentArgs = Array.prototype.slice.call(arguments);
        currentArgs = previousArgs ? currentArgs.concat(previousArgs) : currentArgs;
        previousArgs = currentArgs;
        return fn.apply(this, currentArgs) || returnFn;

    };
    return returnFn;
}


curriedFunction = curry(function (a, b, c) {
    return  a + b + c;
});
curriedFunction(1, 2, 3); // return 6;
curriedFunction(1, 2)(3); // return 6;
curriedFunction(1)(2)(3); // return 6;