//allows us to create object instances using the prototype paradigm
if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}


Function.prototype.bind = function(context) {
  // var fun = this;
  // return function(){
  //   return fun.apply(context, arguments);
  // };
  if (arguments.length < 2 && arguments[0] == undefined) return this;
  var __method = this, args = $A(arguments), object = args.shift();
  return function() {
    return __method.apply(object, args.concat($A(arguments)));
  };
};

function $A(iterable) { 
  if (!iterable) return []; 
  if (iterable.toArray) return iterable.toArray();
  var length = iterable.length || 0, results = new Array(length);
  while (length--) results[length] = iterable[length];
  return results;
}

