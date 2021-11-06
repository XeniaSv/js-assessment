exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return (arg) => `${str}, ${arg}`;
  },

  makeClosures: function(arr, fn) {
    let res = [];
    let newFn = (val) => () => fn(val)

    arr.forEach(element => {
      res.push(newFn(element));
    });
    return res;
  },

  partial: function(fn, str1, str2) {
    return (str3) => fn(str1, str2, str3);
  },

  useArguments: function() {
    let sum = 0;
    const args = Array.from(arguments);

    args.forEach(element => {
      sum += element;
    });

    return sum;
  },

  callIt: function(fn) {
    const args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    const args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      const newArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, newArgs);
    };
  },

  curryIt: function(fn) {
    let getArguments = (accumArgs, expectArgs) => {
      return (currArg) => {
        accumArgs.push(currArg);

        if (accumArgs.length == expectArgs.length)
          return fn.apply(null, accumArgs);
        
        return getArguments(accumArgs, expectArgs);
      }
    }

    return getArguments([], fn);
  }
};
