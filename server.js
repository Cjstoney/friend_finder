var express = require("express");
var path = require("path");

var app = express();
var PORT = server.listen(process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

// =======================================================================
// app.get("/", function(req,res){
//     res.sendFile(path.join(__dirname, "/public/home.html"))
// });   
// app.get("/survey", function(req,res){
//     res.sendFile(path.join(__dirname, "/public/survey.html"))
// });   

app.listen(PORT, () => console.log("Listening on port %s", PORT));