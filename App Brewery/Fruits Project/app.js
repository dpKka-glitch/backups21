const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});
// fruitsDb is a database

//schema as a skeleton
const fruitsSchema = new mongoose.Schema ({
  name : String ,
  rating : Number,
  review : String
});

//model Fruit is a collection
const Fruit = mongoose.model("Fruit" , fruitsSchema)

//fruit is a document for Fruit collection i.e, instance of model Fruit
const fruit = new Fruit({
  name: 'Apple',
  rating : 7,
  review: "Great"
})

fruit.save()

const PersonSchema = new mongoose.Schema({
  name : String,
  age : Number
})

const Person = mongoose.model("Person" , PersonSchema)

const person = new Person({
  name: "John",
  age: 10
})
person.save()

Person.find(funtion(err, people){
  if (err) {
    console.log(err)
  } else {
    console.log(people)
  }
}) ;
