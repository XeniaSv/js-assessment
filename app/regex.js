exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter: function(str) {
    return(/([A-Za-z])\1/).test(str);
  },

  endsWithVowel: function(str) {
    return(/[aeiouy]$/i).test(str);
  },

  captureThreeNumbers: function(str) {
    var numbers = (/\d{3}/).exec(str);
    if (numbers)
      return numbers[0];
    else
      return false;
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD: function(str) {
    return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
  }
};
