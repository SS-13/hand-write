/* 
call语法：
fun.call(thisArg, arg1, arg2, ...)，调用一个函数, 其具有一个指定的this值和分别地提供的参数(参数的列表)。

apply语法：
func.apply(thisArg, [argsArray])，调用一个函数，以及作为一个数组（或类似数组对象）提供的参数。

*/

// Function.call按套路实现
// call核心：
// 将函数设为对象的属性
// 执行&删除这个函数
// 指定this到函数并传入给定参数执行函数
// 如果不传入参数，默认指向为 window

// 1 简单版
var foo = {
  value: 1,
  bar: function () {
    console.log(this.value);
  },
};
foo.bar(); // 1

// 2 完善版
Function.prototype.call2 = function (content = window) {
  content.fn = this;
  let args = [...arguments].slice(1);
  let result = content.fn(...args);
  delete content.fn;
  return result;
};
let foo = {
  value: 1,
};
function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}
bar.call2(foo, "black", "18"); // black 18 1

// Function.apply的模拟实现
Function.prototype.apply2 = function (context = window) {
  context.fn = this;
  let result;
  // 判断是否有第二个参数
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
