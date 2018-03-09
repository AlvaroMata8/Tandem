const User = require("../models/User");
const MotorBikeRent = require("../models/MotorBikeRent");

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

const motorBikes = [
  {
    brand: "BMW",
    model: "R NINE T",
    horsePower: 1200,
    city:"Madrid",
    price:50,
    img:"https://auto.ndtvimg.com/bike-images/medium/bmw/r-nine-t/bmw-r-nine-t.jpg?v=10",
    use:"City",
    bikeType:['Sport'],
    where:['North'],
    owner:'5a9ef8a2b698b957d817dcfb',
    recogida: new Date(),
    entrega: new Date()
  },
  {
    brand: "MvAugusta",
    model: "Brutale",
    horsePower: 800,
    city:"Madrid",
    price:30,
    img:'https://cdn.shopify.com/s/files/1/0863/6486/products/ducati-mv-agusta-motorcycle-products-mv-agusta-brutale-800-my16-dragster-my17-qd-exhaust-slash-cut-4_2000x.jpg?v=1510928653',
    use:"City",
    bikeType:['Sport'],
    where:['East'],
    owner:'5aa1c92e512d68169e86c50f',
    recogida: new Date(),
    entrega: new Date()
  },
  {
    brand: "Honda",
    model: "CBR 500",
    horsePower: 500,
    city:"Galicia",
    price:50,
    img:'http://www.honda.es/content/dam/central/motorcycles/supersports/cbr500r/cbr500r2016/honda-bikes-2016-supersport-cbr500r-004-16x9.jpg/_jcr_content/renditions/c4.jpg',
    bikeType:['Sport'],
    where:['North'],
    owner:'5a9ef8a2b698b957d817dcfb',
    recogida: new Date(),
    entrega: new Date()
  },
  {
    brand: "Yamaha",
    model: "Tmax 650",
    horsePower: 650,
    city:"Madrid",
    price:20,
    img:'https://www.motofichas.com//images/phocagallery/Yamaha_Motor_Corporation/T-Max_530_DX_2017/01-yamaha-t-max-530-dx-2017.jpg',
    use:"City",
    bikeType:['Scooter'],
    where:['South'],
    owner:'5aa152f3b0918d767790e158',
    recogida: new Date(),
    entrega: new Date()
  },
  {
    brand: "Kawasaki",
    model: "KLX 250",
    horsePower: 250,
    city:"Galicia",
    price:25,
    img:'https://www.motofichas.com/images/cache/1990-kawasaki-klx250-2012.jpg',
    use:"City",
    bikeType:['Cross'],
    where:['East'],
    owner:'5aa152f3b0918d767790e158',
    recogida: new Date(),
    entrega: new Date()
  },
  {
    brand: "BMW",
    model: "R 1200 GS",
    horsePower: 1200,
    city:"Galicia",
    price:30,
    img:'https://www.motofichas.com/images/cache/3751-01-bmw-r-1200-gs-adventure-perfil-blanca-azul.jpg',
    use:"City",
    bikeType:['Trail'],
    where:['West'],
    owner:'5aa21edb101f692db803d207',
    recogida: new Date(),
    entrega: new Date()
  },
  
];


MotorBikeRent.collection.drop();

// const newMotorbike = new MotorBike(motorBikes[0]);
// newMotorbike.save()

MotorBikeRent.create(motorBikes)
.then(newMotorbike => {
  User.find().then(user=>{
    console.log(newMotorbike[0]._id )
    User.updateOne({_id: user[0]._id},{ $push: { myBikes: newMotorbike[0]._id } })
    .then(updatedUser=>console.log(updatedUser))
  })
})



