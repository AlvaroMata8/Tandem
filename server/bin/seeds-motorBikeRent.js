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
    motorBikeImg:[String],
    use:"City",
    recogida: new Date(),
    entrega: new Date()
  },
  {
    brand: "MvAugusta",
    model: "Brutale",
    horsePower: 800,
    city:"Madrid",
    price:[30],
    motorBikeImg:[String],
    use:"City",
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



