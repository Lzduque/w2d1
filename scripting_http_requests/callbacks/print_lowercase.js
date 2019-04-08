var getHTML = require('../http-functions').getHTML; //('./http-functions') that is exported and now is an object - so you need to call the property you want.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  console.log(html.toLowerCase());
}


getHTML(requestOptions, printLowerCase);

