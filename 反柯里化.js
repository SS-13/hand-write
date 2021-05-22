Function.prototype.unCurring = function () {
  var self = this;
  return function () {
    var obj = Array.prototype.shift.call(arguments);
    return self.apply(obj, arguments);
  };
};
var push = Array.prototype.push.unCurrying(),
  obj = {};
push(obj, "first", "two");
console.log(obj);
