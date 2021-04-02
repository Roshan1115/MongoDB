// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RoshanKart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Fire call back once connected to the srever
// db.once('open', function() {
//   console.log('We are connected Roshan.');
// });

//Define the Schema
const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  const greeting = "My name is " + this.name;
  console.log(greeting);
}

//Change the schema to model to permanently fix the schema
const Kitten = mongoose.model('RoshanMongo', kittySchema);

const RoshanKitten = new Kitten({ name: 'RoshanKitten' });
const RoshanKitten22 = new Kitten({ name: 'RoshanKitten22' });
// console.log(RoshanKitten.name);
// RoshanKitten.speak();

//Saving the data to MongoDB database
RoshanKitten.save(function (err, SecondArguement) {
  if (err) return console.error(err);
  // SecondArguement.speak();
});
RoshanKitten22.save(function (err, SecondArguement) {
  if (err) return console.error(err);
  // SecondArguement.speak();
});

//Finding objects inside collections
Kitten.find({name: 'RoshanKitten'}, function (err, Arguement) {
  if (err) return console.error(err);
  console.log(Arguement);
})