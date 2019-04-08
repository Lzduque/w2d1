function getAndPrintHTML (options) {

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
          console.log('Response stream complete.');
        });

      });
  }

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

