exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    num = num.toString(2);

    return bit > num.length ? 0 : Number(num.toString(2)[num.length - bit]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let res = [];
    for (let i = 7; i >= 0; i--) {
      if (num & (1 << i))
        res.push(1);
      else
        res.push(0);
    }
    return res.join('');
  },

  multiply: function(a, b) {
    return +(a * b).toFixed(8);
  }
};
