var request = require('request');
var secrets = require('./secrets');
var fs = require('fs');

// pick the parameters from the terminal
var query = process.argv.slice(2);

console.log('Welcome to the GitHub Avatar Downloader!');

// main function
function getRepoContributors(repoOwner, repoName, callback) {

  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': secrets +' OAUTH-TOKEN'
    }
  };

  // calling the data from the web
  request(options, function (error, response, body) {

    callback(error, body);

    // put all the data in an array
    var data = JSON.parse(body);

    // going through each element of the array and selecting each url and choosing the name of the file (filePath)
    data.forEach(function(element) {
      downloadImageByURL(element.avatar_url, 'avatar/' + element.login + '.jpg');
    });

    //get the image and saving it
    function downloadImageByURL(url, filePath) {
      request.get(url)
      .on('error', function (err) {
        throw err;
      })
      .pipe(fs.createWriteStream(filePath));
    }
  });
}

//
getRepoContributors(query[0], query[1], function(err, result) {
  if (query.length === 0) {
    console.log('repoOwner or repoName is undefined! Please eneter a parameter!\nrepoOwner and repoName: ', query);
    throw error;
  }
});

// https://api.github.com/repos/jquery/jquery/contributors

// curl -i -H 'Authorization: token XXXXX' https://api.github.com/repos/jquery/jquery/contributors
