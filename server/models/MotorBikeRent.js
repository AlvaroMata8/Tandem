const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User');
const Rent = require('./Rent');

const motorBikeRentSchema = new Schema(
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
    city:String,
    price:[Number],
    motorBikeImg:[String],
    use:String,
    recogida: Date,
    entrega: Date
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const MotorBikeRent = mongoose.model("MotorBikeRent", motorBikeRentSchema);
module.exports = MotorBikeRent;
