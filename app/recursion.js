exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let dirs = [];
    let files = [];

    let funcDir = (dir) => {
      dirs.push(dir.dir);

      dir.files.forEach(file => {
        if (typeof file === "string") {
          if ((!dirName || dirs.indexOf(dirName) > -1))
          files.push(file);
        }
        else
          funcDir(file);
      });

      dirs.pop();
    }

    funcDir(data);
    return files;
  },

  permute: function(arr) {
    let res = [];

    if (arr.length === 0)
      return [];
    if (arr.length === 1)
      return [arr];

    for (let i = 0; i < arr.length; i++) {
      const currElem = arr[i];
      const restElems = arr.slice(0, i).concat(arr.slice(i + 1));

      const restElemsPermuted = this.permute(restElems);

      restElemsPermuted.forEach(element => {
        res.push([currElem].concat(element));
      });
    }
    return res;
  },

  fibonacci: function(n) {
    if (n <= 2)
      return 1;
    
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    function generateParentheses(n, open, close, tempRes, res) {
      if (tempRes.length === n * 2) {
        res.push(tempRes);
        return;
      }
      if (open < n) 
        generateParentheses(n, open + 1, close, tempRes.concat('('), res);
      if (close < open)
        generateParentheses(n, open, close + 1, tempRes.concat(')'), res);
    }

    const res = [];
    generateParentheses(n, 0, 0, '', res);
    return res;
  }
};
