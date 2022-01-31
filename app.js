// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');
}

const fruitSchema = new mongoose.Schema({
    name: {
      type: String, 
      //required: [true, "PLEASE ADD NAME"], 
    },
    rating: {
      type: Number,
      min: 1, 
      max: 10
    },
    review: String
});

const fruit = mongoose.model('fruit', fruitSchema);

const fruits = new fruit({
    name: 'Paw paw',
    rating: 10,
    review: 'Deliscious'
});

fruits.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema 
})

const Person = mongoose.model("Person", personSchema);
const mango = new fruit({
  name: "mango",
  rating: 9,
  review: "great staff"
})

Person.updateOne({name:"ALEXANER"}, {favouriteFruit: "mango"}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("AJ LIKES MANGO");
  }
} );

mango.save()

// const person = new Person ({
//   name: "ANDER",
//   age: 30,
//   favouriteFruit: "pineapple"
// });

//person.save();

// const peaches = new fruit({
//   name: "peaches",
//   score: 6,
//   review: "The best"
// });

// const mango = new fruit({
//   name: "mango",
//   score: 2,
//   review: "The best ever"
// });

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

// fruit.updateOne( {_id: "61f7b79cf3a5ac5032af44e7"}, {name: "potato"}, function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//    console.log("Successfully added an item") ;
//   }
// } );

// Person.deleteMany( {name: "ALEXANER"}, function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//    console.log("Successfully deleted an item") ;
//   }
// } );

// fruit.deleteOne( {name: "Paw paw"}, function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//    console.log("Successfully deleted an item") ;
//   }
// } );

// fruit.deleteOne( {name: "Paw paw"}, function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//    console.log("Successfully deleted an item") ;
//   }
// } );

// fruit.deleteMany({name: "pineapple"}, function (err, res){
// })

// Person.deleteMany( {name: "ALEXANDER"}, function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//    console.log("Successfully deleted an AJ") ;
//   }
// } );

const bookSchema = new mongoose.Schema({
   name: String,
   rating: Number,
   review: String
 })
const Book = mongoose.model("Book", bookSchema);
const book = new Book ({
  name: "Bible",
  rating: 5,
  review: "wonderful book"
});

//book.save();









