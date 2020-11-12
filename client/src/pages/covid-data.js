var unirest = require("unirest");

var req = unirest("GET", "https://covid-193.p.rapidapi.com/countries");

req.headers({
	"x-rapidapi-key": "a095604c14mshcf511ea4bd14f56p12d80ajsnf43076094929",
	"x-rapidapi-host": "covid-193.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});