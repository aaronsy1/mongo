var express = require('express');
var bp = require('body-parser');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: true }));
// parse application/json
app.use(bp.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    res.render("index");
});

app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});