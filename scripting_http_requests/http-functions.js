var https = require('https');

function getHTML (options, callback) {
    /* Your code here */

  var dataReceived;

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      dataReceived += data;
      console.log('Data Received: ', dataReceived);
    });
    response.on('end', function() {
      return callback;
    });
  });
};

function printHTML (html) {
  console.log(html);
}


module.exports = {
  getHTML,
  printHTML
}