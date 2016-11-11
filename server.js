var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3013, function() {
	console.log("Server encendido 3013");
});