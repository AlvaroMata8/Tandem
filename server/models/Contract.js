const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User").Schema;
const MotorBike = require ('./MotorBike');

const contractSchema = new Schema(
  {
    ownerId:{
        type:[Schema.Types.ObjectId],
        ref:'User'
    },
    motorBikeId:{
        type:[Schema.Types.ObjectId],
        ref:'MotorBike'
    }
  }
);

const Contract = mongoose.model("Contract", contractSchema);
module.exports = Contract;
