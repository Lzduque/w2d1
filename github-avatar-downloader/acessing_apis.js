var request = require('request');
var secrets = require('./secrets');
var fs = require('fs'); // you need that module to manipulate files inside your local system!

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, callback) {

  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': secrets +' OAUTH-TOKEN'
    }
  };

  resquest(options.url, function (error, response, body) {

    if (error) {
      console.log(error);
      return;
    }
    if (response.statusCode === 200) {
      var data = JSON.parse(body); //JSON.parse takes the data info and transforms it into javascript
      console.log(data);

      // var woeid = data[0].woeid;
      // request("https://www.metaweather.com/api/location/" + woeid + "/", function (error, response, body) {
      //   if (error) {
      //     console.log(error);
      //     return;
      //   }
      //   if (response.statusCode === 200) {
      //     var weatherData = JSON.parse(body);
      //     console.log("The temperature today: ",weatherData.consolidated_weather[0].the_temp);
      //     console.log("The humidity today: "weatherData.consolidated_weather[0].humidity);

      //     var pathIcon = "https://www.metaweather.com/static/img/weather/ico/" + weather_state_abbr + ".ico";
      //     console.log("")
      //     request.get(pathIcon).pipe(fs.createWriteStream ("./weather" + query + ".ico")); //pipe connects two pipes, the pipe that come from the server and the pipe from the server!

      //   }
      // });
    }
  });
}

//call it like node acessing_apis.js Toronto !
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
