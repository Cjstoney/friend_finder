var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/VRDisplayEvent.api+json"}));

app.use(express.static("app/public"));

// require("routing/apiRoutes.js")(app);
// require("routing/htmlRoutes.js")(app);

app.listen(port, () => console.log("Listening on port %s", port));