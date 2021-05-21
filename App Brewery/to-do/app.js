//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"))
  var items = [] ;

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";


  var options = {
	  weekday : 'long' ,
	  day : "numeric" ,
	  month : 'long'
  }
day = today.toLocaleDateString ("en-us" , options )

  res.render('index', {
    justAday: day,
    itemThis : items
  });
});

app.post("/" , function(req, res){
  item = req.body.Task1 ;
  items.push(item)
  res.redirect('/')
  console.log(items)
})

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
