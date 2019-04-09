var request = require('request');
var secrets = require('./secrets');
var fs = require('fs');

var query = process.argv.slice(2);
// console.log(query);

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, callback) {

  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': secrets +' OAUTH-TOKEN'
    }
  };

  request(options, function (error, response, body) {

    callback(error, body);

    var data = JSON.parse(body);

    data.forEach(function(element) {
      downloadImageByURL(element.avatar_url, 'avatar/' + element.login + '.jpg');
    });

    function downloadImageByURL(url, filePath) {
      request.get(url)
      .on('error', function (err) {
        throw err;
      })
      .pipe(fs.createWriteStream(filePath));
    }

  });
}

getRepoContributors(query[0], query[1], function(err, result) {
  // console.log("Errors:", err);
  // console.log("Result:", result);
});

// https://api.github.com/repos/jquery/jquery/contributors

// curl -i -H 'Authorization: token XXXXX' https://api.github.com/repos/jquery/jquery/contributors
