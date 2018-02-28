const User = require("../models/User");
const MotorBike = require("../models/MotorBike");

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
    rents: [],
  },
  {
    brand: "MvAugusta",
    model: "Brutale",
    horsePower: 800,
    rents: [],
  }
];


MotorBike.collection.drop();

// const newMotorbike = new MotorBike(motorBikes[0]);
// newMotorbike.save()

MotorBike.create(motorBikes)
.then(newMotorbike => {
  User.find().then(user=>{
    console.log(newMotorbike[0]._id )
    User.updateOne({_id: user[0]._id},{ $push: { myBikes: newMotorbike[0]._id } })
    .then(updatedUser=>console.log(updatedUser))
  })
})



