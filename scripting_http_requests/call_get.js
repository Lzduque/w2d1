var getHTML = require('./http-functions').getHTML; //('./http-functions') that is exported and now is an object - so you need to call the property you want.
var printHTML = require('./http-functions').printHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML(requestOptions.path));
