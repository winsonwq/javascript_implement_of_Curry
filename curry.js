(function (exports) {
    exports.curry = curry;

    function curry(fn) {
        return function returnFn() {
            var currentArgs = Array.prototype.slice.call(arguments);
            removeUndefinedElement(currentArgs);
            var previousArgs = currentArgs;
            var result = fn.apply(this, currentArgs);
            return result ? result : function callback() {
                var currentArgs = Array.prototype.slice.call(arguments);
                removeUndefinedElement(currentArgs);
                currentArgs = previousArgs.concat(currentArgs);
                previousArgs = currentArgs;
                var result = fn.apply(this, currentArgs);
                return result ? result : callback;
            };
        };

        function removeUndefinedElement(arr) {
            arr.forEach(function (val, key) {
                if (typeof val == "undefined") arr.splice(key, 1);
            });
        }
    }
})(this);
