exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) {
    let sum = 0;
    arr.forEach(element => {
      sum += element;
    });
    return sum;
  },

  remove: function(arr, item) {
    let newArr = [];

    arr.forEach(element => {
      if (element !== item)
        newArr.push(element);
    });
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for(let i = 0; i < arr.length; i ++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;

    arr.forEach(element => {
      if (element === item)
        count++;
    });

    return count;
  },

  duplicates: function(arr) {
    const uniqueElems = new Set(arr);
    const filteredElems = arr.filter(item => {
        if (uniqueElems.has(item)) {
            uniqueElems.delete(item);
        } else {
            return item;
        }
    });

    return Array.from(new Set(filteredElems));
  },

  square: function(arr) {
    return arr.map(item => item * item)
  },

  findAllOccurrences: function(arr, target) {
    return arr.map((item, index) => {
      if (item === target)
        return index;
    }).join('').split('');;
  }
};
