const mocha = require("mocha");
const assert = require('assert')
const Memory = require('../memories')   //import collection model

describe("finding from the the database" , function(){
    var mem ;
    beforeEach(function(done){
            mem = new Memory({                          //same as creating a new js object
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

    it('finds record from the database', function(done){
        Memory.findOne({title: "Testing a name" }).then(function (result) {
            assert(result.title==="Testing a name");
            done();
        })
    }
    )

    it('finds record from the database by id', function(done){
        Memory.findOne({_id: mem._id }).then(function (result) {
            assert(result.author === mem.author);
            done();
        })
    }
    )
})