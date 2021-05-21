//ExpressJS setup
const express = require('express')
const app = express()
const port = 3000 ;

const mongoose = require('mongoose');

//DB connection via mongoose ORM
mongoose.connect(`mongodb://hatwaarbeta:mongo7038@devcluster0-shard-00-00.hdvnq.mongodb.net:27017,devcluster0-shard-00-01.hdvnq.mongodb.net:27017,devcluster0-shard-00-02.hdvnq.mongodb.net:27017/senate-data?ssl=true&replicaSet=atlas-rsjh27-shard-0&authSource=admin&retryWrites=true&w=majority` , {useNewUrlParser: true, useUnifiedTopology: true}) ;
mongoose.set('useFindAndModify', false);

//connect to db before test run
mongoose.connection.once("open" , function(){
    console.log("Connected.");
}).on('error', function(error) {
    console.log("connection erorr ", error);
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//GraphQl setup
const {graphqlHTTP} = require('express-graphql')
const schema = require("./schema/schema.js")
//Setting middleware for gql
app.use('/graphql', graphqlHTTP({
  schema ,
  graphiql : true
})) ;


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
