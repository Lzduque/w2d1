function getHTML (options, callback) {

  /* Add your code here */
  var https = require('https');

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML(requestOptions.path));
