var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  var dataReceived;

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      dataReceived += data
      console.log('Data Received: ', dataReceived);
    });
      response.on('end', function() {
        console.log('Response stream complete.');
      });

    });
}

getAndPrintHTML();