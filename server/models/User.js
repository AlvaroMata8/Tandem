const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MotorBikeRent = require('./MotorBikeRent')

const userSchema = new Schema(
  {
    username: {
      type:String,
      required:[true,'Please enter a username']
    },
    password:{
      type:String,
      required:true
    },
    name: {
      type:String,
      required:[true,'Please enter a name']
    },
    myBikes:[{
      type:Schema.Types.ObjectId,
      ref:'MotorBikeRent'
    }],
    lastName: String,
    userImage:String,
    license:{
      type:String,
      required:[true,'Please enter at least one license']
    },
    city:String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
