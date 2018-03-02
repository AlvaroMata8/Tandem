const express = require("express");
const MotorBikeRent = require("../../models/MotorBikeRent");
const router = express.Router();

// Retrieve all de RENTS
router.get("/", (req, res) => {
  MotorBikeRent.find()
  .populate("owner")
    .then(rents => {
      if (rents.length === 0)
        res.status(404).json({ message: "There are no rents!" });
      else res.status(200).json(rents);
    })
    .catch(error => res.status(500).json(error));
});

//Retrieve one RENT
router.get("/:id", (req, res) => {
  MotorBikeRent.findById(req.params.id)

    .then(rent => res.status(200).json(rent))
    .catch(error =>
      res.status(500).json({
        message: `Rent with id: ${req.params.id} does not exists!`,
        error
      })
    );
});

//Create a RENT
router.post("/newRent", (req, res) => {
  const newMotorBikeRent = new MotorBikeRent({
    brand: req.body.brand,
    model: req.body.model,
    horsePower: req.body.horsePower,
    city: req.body.city,
    price: req.body.price,
    use: req.body.use,
    recogida: req.body.recogida,
    entrega: req.body.entrega,
    img: req.body.img,
    owner:req.user._id
  });

  newMotorBikeRent.save()
  .then(thatBike =>{
      User.findByIdAndUpdate(thatBike.owner,{$push: {myBikes: thatBike._id}})
      .then(bike => {
        console.log(`Puesta en alquiler: ${newMotorbikeRentSaved._id}`);
        console.log(`Quien lo pone en alquiler: ${thatBike.owner}`);
        res.status(200).json(bike);
      })
      //.catch(err=>res.status(500).json(err));
    })
  
  })

//Edit RENT
router.put("/edit/:id",(req,res) =>{
  const { brand,model,horsePower,city,price,use,recogida,entrega,img} = req.body;
  const updates = { brand,model,horsePower,city,price,use,recogida,entrega,img };

  MotorBikeRent.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(newMotorBikeRent => res.status(200).json(newMotorBikeRent))
    .catch(error => res.status(500).json(error));
  });

//DELETE RENT
router.post('/delete/:id',(req,res)=>{
  MotorBikeRent.findByIdAndRemove(req.params.id)
  .then(rent => res.status(200).json(rent))
  .catch(e => res.status(500).json(error));
})
module.exports = router;
