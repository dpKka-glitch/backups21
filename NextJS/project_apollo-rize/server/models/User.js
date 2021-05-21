const {model, schema, Schema} = require("mongoose") ;

const userSchema = new Schema({
    username: String ,
    email: String,
    createdAt: String
})

module.exports = model("User", userSchema)