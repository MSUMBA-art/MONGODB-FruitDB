// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');
}

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const fruit = mongoose.model('fruit', fruitSchema);

const fruits = new fruit({
    name: 'Apple',
    rating: 5,
    review: 'Deliscious'
});

// fruits.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const Person = mongoose.model("Person", personSchema);
const person = new Person ({
  name: "ALEXANDER",
  age: 40
});

//person.save();

const peaches = new fruit({
  name: "peaches",
  score: 6,
  review: "The best"
});

const mango = new fruit({
  name: "mango",
  score: 2,
  review: "The best ever"
});

// const grapes = new fruit({
//   name: "grapes",
//   score: 8,
//   review: "The best sure"
// });

// fruit.insertMany([peaches, mango], function(err) {
//   if (err) {
//     console.log(err)
//   } else {
//    console.log("Successfully saved all the fruits to fruitsDB") 
//   }
// });

fruit.find( function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    //console.log(fruits);
  fruits.forEach( function(fruit) {
    console.log(fruit.name);
  });
  }
});





