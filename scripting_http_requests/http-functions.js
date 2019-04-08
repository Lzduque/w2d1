var https = require('https');

function getHTML (options, callback) {
    /* Your code here */

  var dataReceived;

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      dataReceived += data;
      console.log('Data Received: ', dataReceived);
      callback(data);
    });
    response.on('end', function() {
      console.log('End of request!');
    });
  });
};

function printHTML (html) {
  console.log(html);
}


module.exports = {
  getHTML,
  printHTML
} // if you need to export more then one function, you need to export it as an object, otherwise, if you call module.exports lots of times, you are just substituting one variable with the other!!