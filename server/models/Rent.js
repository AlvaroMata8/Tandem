const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User").Schema;
const MotorBikeRent = require ('./MotorBikeRent');
const Contract = require ('./Contract');

const rentSchema = new Schema(
  {
    propietorId:{
        type:[Schema.Types.ObjectId],
        ref:'User'
    },
    city:String,
    motorBikeId:{
        type:[Schema.Types.ObjectId],
        ref:'MotorBikeRent'
    },
 
    price:Number,
    recogida:{
        // sitio:[Punto1,Punto2,Punto3,Punto4],
        date: Date
    },
    entrega:{
        // sitio:[Punto1,Punto2,Punto3,Punto4],//otro modelo para los puntos de recogida?
        date: Date
    },
    use:String,
    motorBikeImg:[String]
 
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Rent = mongoose.model("Rent", rentSchema);
module.exports = Rent;

