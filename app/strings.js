exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let res = '';

    let prev = '';
    let counter = 0;
    
    str.split('').forEach(char => {
      if (char !== prev)
        counter = 0;
      counter++;
      prev = char;
      if (counter <= amount)
        res = res + char;
    });

    return res;
  },

  wordWrap: function(str, cols) {
    let splitStr = str.split(' ');
    let res = splitStr[0];

    for (let i = 1; i < splitStr.length; i++) {
      if (splitStr[i].length > cols)
        res += '\n' + splitStr[i];
      else
        if (res.length + splitStr[i].length > cols)
          res += '\n' + splitStr[i];
        else
          res += ' ' + splitStr[i];
    }

    return res;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
