var getHTML = require('../http-functions').getHTML; //('./http-functions') that is exported and now is an object - so you need to call the property you want.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  console.log(html.split("").reverse().join(""));
}


getHTML(requestOptions, printReverse);

