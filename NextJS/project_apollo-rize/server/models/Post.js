const {model, schema, Schema} = require("mongoose");

const postSchema = new Schema({
    body: String,
    userId: String,
    objectUrl: String ,
    createdAt: String,
    comments: [                          //type can be an array && schema can also be nested
      {
        body: String,
        userId: String,
        createdAt: String
      }
    ],
    likes: [
      {
        userId: String,
        createdAt: String
      }
    ],
    
})

module.exports = model("Post", postSchema)