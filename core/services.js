
const request = require('request');


exports.downloadImages = (date) => {

  var apiUri = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
  var parameters = 'earth_date=' + date + '&api_key=DEMO_KEY';

  var options = {
    url: apiUri + parameters,
    headers: {
      'User-Agent': 'request'
    }
  };

  return new Promise(function (resolve, reject) {

    request.get(options, function (err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    })
  })

}


