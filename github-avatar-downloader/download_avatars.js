var request = require('request');
var secrets = require('./secrets');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, callback) {

  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': secrets +' OAUTH-TOKEN'
    }
  };

  // console.log("options: ",options);

  request(options, function (error, response, body) {
    // console.log('OPTION: ',options.url);

    // console.log('error: ',error);
    // console.log('response: ',response);
    // console.log('body: ',body);

    callback(error, body);

    var data = JSON.parse(body);
    // console.log('');
    // console.log('data: ',data);

    // var avatarsUrls = {};

    console.log('');
    console.log(data.length);
    console.log('');

    data.forEach(function(element) {
      console.log(element.avatar_url);
    });
  });
}


getRepoContributors("jquery", "jquery", function(err, result) {
  // console.log("Errors:", err);
  // console.log("Result:", result);
});

// test

// https://api.github.com/repos/jquery/jquery/contributors

// curl -i -H 'Authorization: token XXXXX' https://api.github.com/repos/jquery/jquery/contributors
