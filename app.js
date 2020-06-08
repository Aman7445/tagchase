var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser");

var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.render("landing")
});








let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function(req, res){
    console.log("Server has started!")
});