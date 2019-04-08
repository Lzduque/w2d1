var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })

       .on('response', function (response) {
         console.log('Downloading image...');
         console.log('Response Status Code: ', response.statusCode);
         console.log('response Content Type: ', response.headers['content-type']);
         console.log('Download complete.');
       })
       .on('finish', function (response) {
         console.log('Download complete??');
       })
       .pipe(fs.createWriteStream('./future.jpg'));
         // console.log('Download complete??'); --> if I put it here, its going to print frist!!!!
