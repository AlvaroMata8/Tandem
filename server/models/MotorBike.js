const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User');
const Rent = require('./Rent');

const MotorBikeSchema = new Schema(
  {
    brand: {
      type:String,
      required:[true,'Please enter a brand']
    },
    model: {
      type:String,
      required:[true,'Please enter a model']
    },
    horsePower: Number,
    propietorId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    rents:[{
      type: Schema.Types.ObjectId,
      ref: 'Rent'
    }]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const MotorBike = mongoose.model("MotorBike", MotorBikeSchema);
module.exports = MotorBike;
