const mongoose = require('mongoose');
mongoose.connect('mongodb://hatwaarbeta:mongo7038@devcluster0-shard-00-00.hdvnq.mongodb.net:27017,devcluster0-shard-00-01.hdvnq.mongodb.net:27017,devcluster0-shard-00-02.hdvnq.mongodb.net:27017/senate-data?ssl=true&replicaSet=atlas-rsjh27-shard-0&authSource=admin&retryWrites=true&w=majority' , {useNewUrlParser: true, useUnifiedTopology: true}) ;
mongoose.set('useFindAndModify', false);
//connect to db before test run
before(function(done){
mongoose.connection.once("open" , function(){
    console.log("Connected.");
    done();
}).on('error', function(error) {
    console.log("connection erorr ", error);
})
}
) ;

// beforeEach(function(done){
//     mongoose.connection.collections.memories.drop(function(){
//         done() ;
//     })
// })

