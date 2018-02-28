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

User.findById({ _id:"5a9582390b04ad356c4202ce" }).then(user => {
  const id = user._id.toString();

  const motorBikes = [
    {
      brand: "BMW",
      model: "R NINE T",
      horsePower: 1200,
      rents: [],
      propietorId: "5a9582390b04ad356c4202ce" //herminia
    },
    {
      brand: "MvAugusta",
      model: "Brutale",
      horsePower: 800,
      rents: [],
      propietorId: "5a9582390b04ad356c4202cd" //josiño
    }
  ];
  MotorBike.collection.drop();

  MotorBike.create(motorBikes, (err, bike) => {
    if (err) {
      throw err;
    }
    console.log(user)
    motorBikes.forEach(bike => {
      user.myBikes.push(bike._id);
      console.log(bike.brand);
    });
  });
});
