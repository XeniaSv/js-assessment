exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise( 
      resolve => resolve(value)
    );
  },

  manipulateRemoteData: function(url) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', url);

      request.onload = () => {
        if (request.status === 200)
          resolve(request.response);
        else
          reject(Error(request.status));
      }
      request.send();
    }).then(response => {
      let data = JSON.parse(response).people;
      return data.map(key => key.name).sort();
    });
  }
};
