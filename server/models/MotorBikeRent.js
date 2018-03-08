const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User');

const motorBikeRentSchema = new Schema(
  {
    brand: {
      type:String,
      required:[true,'Please enter the brand']
    },
    model: {
      type:String,
      required:[true,'Please enter the model']
    },
    horsePower: Number,
    owner:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    city:String,
    price:Number,
    img:String,
    use:String,
    bikeType:{"type": "array",
              "items": {"type": "string",
              "enum": ["Scooter", "Sport", "Trail","Cross"]
            }
    },
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
