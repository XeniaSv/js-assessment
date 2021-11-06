exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let timeout = 0;

    setMyTimeOut = () => {
      console.log(start++);
      if (start <= end)
        timeout = setTimeout(setMyTimeOut, 100);
    }

    setMyTimeOut();

    return {
      cancel : () => {
        timeout && clearTimeout(timeout);
      }
    }
  }
};
