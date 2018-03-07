const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User").Schema;
const MotorBikeRent = require ('./MotorBikeRent');

const contractSchema = new Schema(
  {
    motorBikeId:{
        type:[Schema.Types.ObjectId],
        ref:'MotorBikeRent'
    },
    arrendatarioId:{
      type:[Schema.Types.ObjectId],
      ref:'User'
  },
    start:Date,
    end:Date
  }
);

const Contract = mongoose.model("Contract", contractSchema);
module.exports = Contract;
