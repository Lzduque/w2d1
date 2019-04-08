var getHTML = require('./http-functions').getHTML;
var printHTML = require('./http-functions').printHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML(requestOptions.path));
