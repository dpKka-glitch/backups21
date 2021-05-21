const mocha = require("mocha");
const assert = require('assert')
const Memory = require('../memories')   //import collection model

describe("saving to the database" , function(){
    it('saves a record to the database', function(done){
        var mem = new Memory({                          //same as creating a new js object
            title : "Testing a name" ,
            author : "user0" ,
            date : Date.now(),
            
        }) ;
        mem.save().then(
            function(){
                assert(mem.isNew===false);
                done() ;
            }
        );
    })
})