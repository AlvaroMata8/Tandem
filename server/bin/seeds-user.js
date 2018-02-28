const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptSalt = 5;
const { dbURL } = require("../config");

mongoose.connect(dbURL).then(() => {
    console.log("Connect to DB");
  })
  .catch(e => {
    console.log(e);
  });

const salt = bcrypt.genSaltSync(bcryptSalt);
const password = "tochunga";
const encryptedPass = bcrypt.hashSync(password, salt);

const users= [
    {
    username: "Herminia15",
    password: encryptedPass,
    name: "Herminia",
    lastName: "Pérez",
    myBikes:[],
    userImage:"http://www.salestu.com/fotografias/originales/2011/3/30/1621_1301497619.jpg",
    license:"A2",
    city:'Madrid'
},
{
    username: "JosiñoMoto",
    password: encryptedPass,
    name: "Jose",
    lastName: "Garcia",
    myBikes:[],
    userImage:"http://fotologimg.s3.amazonaws.com/photo/32/8/98/angla/1204195775_f.jpg",
    license:"A",
    city:'Valencia'
  },
  {
    username: "PepeRoadKing",
    password: encryptedPass,
    name: "Pepe",
    lastName: "Del river",
    myBikes:[],
    userImage:"http://i23.servimg.com/u/f23/11/31/75/83/p9020010.jpg",
    license:"A1",
    city:'Zaragoza'
  },
]

User.collection.drop();

User.create(users)
  .then(users=>{
    console.log('createdUsers!');
    mongoose.connection.close();
  })