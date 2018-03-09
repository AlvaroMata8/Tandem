const User = require("../models/User");
const MotorBikeRent = require("../models/MotorBikeRent");

const mongoose = require("mongoose");
const { dbURL } = require("../config");

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connect to DB");
  })
  .catch(e => {
    console.log(e);
  });

const motorBikes = [
  {
    brand: "BMW",
    model: "R NINE T",
    horsePower: 1200,
    city:"Madrid",
    price:50,
    img:"https://auto.ndtvimg.com/bike-images/medium/bmw/r-nine-t/bmw-r-nine-t.jpg?v=10",
    use:"City",
    bikeType:['Sport'],
    where:['North'],
    recogida: new Date(),
    entrega: new Date()
  },
  {
    brand: "MvAugusta",
    model: "Brutale",
    horsePower: 800,
    city:"Madrid",
    price:30,
    img:'https://cdn.shopify.com/s/files/1/0863/6486/products/ducati-mv-agusta-motorcycle-products-mv-agusta-brutale-800-my16-dragster-my17-qd-exhaust-slash-cut-4_2000x.jpg?v=1510928653',
    use:"City",
    bikeType:['Sport'],
    where:['East'],
    recogida: new Date(),
    entrega: new Date()
  }
];


MotorBikeRent.collection.drop();

// const newMotorbike = new MotorBike(motorBikes[0]);
// newMotorbike.save()

MotorBikeRent.create(motorBikes)
.then(newMotorbike => {
  User.find().then(user=>{
    console.log(newMotorbike[0]._id )
    User.updateOne({_id: user[0]._id},{ $push: { myBikes: newMotorbike[0]._id } })
    .then(updatedUser=>console.log(updatedUser))
  })
})



