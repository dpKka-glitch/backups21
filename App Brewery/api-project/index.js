const express = require("express")
const https = require("https")
var bodyParser = require('body-parser')
const app = express() ;
app.use(bodyParser.urlencoded({extended : true})) ;

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.post("/" , function(req ,res){
  const city = req.body.cityName ;
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=74edc88ddd98fd6224a3079474f9cee7"
  https.get(url , function(response) {
    console.log(response.statusCode) ;


    response.on("data", function(data) {
      const wdata = JSON.parse(data)  ;
      const temp = Math.floor(wdata.main.temp) - 273 ;
      const feels = wdata.main.humidity ;
      const icon = wdata.weather[0].icon ;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png" ;
      console.log(imageURL) ;
      res.write("<h1>The temperature in "+ city +" is  " + temp + " degrees </h1> ") ;
      res.write("<img src=" + imageURL + ">") ;
      res.send() ;
    })
  })
})

app.listen(3000, function() {
  console.log("server is running")
})
