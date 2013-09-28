## how to run test
npm install mocha
mocha

### 我需要定义一个方法叫做curry，签名是

function curry (func) {} 

接受一个方法参数，如下有个调用的例子。

- 基础版本
curriedFunction = curry(function (a, b, c) { return  a + b + c; });

curriedFunction(1, 2, 3); // return 6;

curriedFunction(1, 2)(3); // return 6;

curriedFunction(1)(2)(3); // return 6;

- 升级版本

curriedFunction2 = curry(function (a, b, c) { return a + b + c; });

curriedFunction2(1, undefined, 3)(2); // return 6;

curriedFunction2(undefined, 2, undefined)(1, 3); //  return 6;

