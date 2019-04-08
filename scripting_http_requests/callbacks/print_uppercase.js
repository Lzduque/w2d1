var getHTML = require('../http-functions').getHTML; //('./http-functions') that is exported and now is an object - so you need to call the property you want.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  console.log(html.toUpperCase());
}


getHTML(requestOptions, printUpperCase);

