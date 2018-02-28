const User = require("../models/User");
const MotorBike = require("../models/MotorBike");
const Rent = require('../models/Rent');


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

const userPromise = User.find();
const motorBikePromise = MotorBike.find();
Rent.collection.drop();
Promise.all([userPromise, motorBikePromise])
  .then(promisesArray =>{
      const motos = promisesArray[1];
      const users = promisesArray[0];
      motos.forEach(motorBike=>{
          Rent.create({
            propietorId:users[0]._id,
            city:'Madrid',
            motorBikeId:motorBike._id,
            contract:[],
            price:50,
            recogida:new Date(),
            entrega:new Date(),
            use:'City',
            motorBikeImg:[''],
        })
        .then(rent=>console.log(rent))
        .catch(err=>console.log(err))
      })  
  })