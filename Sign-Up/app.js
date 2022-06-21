const express = require("express");
const bodyParser = require("body-parser");
const request = require("request")

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/signup.html")
})

app.post('/', function(req, res) {
    var first_name = req.body.first_name
    var second_name = req.body.second_name
    var password = req.body.password
    console.log(first_name, second_name, password);
})

app.listen(3000, function() {
    console.log("Server is running on port 3000")
})