var request = require('request');
var secrets = require('./secrets');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': secrets +' OAUTH-TOKEN'
    }
  };

  request(options, function(err, res, body) {
    cb(err, body);
  });
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

// https://api.github.com/repos/jquery/jquery/contributors

// curl -i -H 'Authorization: token 7115e5bc854beaaffe3f9f778ff3a90d693534a5' https://api.github.com/repos/jquery/jquery/contributors
