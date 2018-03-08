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
    .then(rent => {
      console.log(rent);
      res.status(200).json(rent)
    })
    .catch(error =>
      res.status(500).json({
        message: `Rent with id: ${req.params.id} does not exists!`,
        error
      })
    );
});

//Create a RENT
router.post("/newRent", (req, res) => {
  console.log(req.body.rent)
  console.log(req.body.user._id)

  const newMotorBikeRent = new MotorBikeRent({
    brand: req.body.rent.brand,
    model: req.body.rent.model,
    horsePower: req.body.rent.horsePower,
    city: req.body.rent.city,
    price: req.body.rent.price,
    use: req.body.rent.use,
    recogida: req.body.rent.recogida,
    entrega: req.body.rent.entrega,
    img: req.body.rent.img,
    owner: req.body.user._id,
    bikeType:req.body.rent.bikeType
  });

  newMotorBikeRent
    .save()
    .then(bike => {
      return res.status(200).json(bike);
    })
    .catch(err => {
      return res.status(500);
    });
});

//Edit RENT
router.put("/edit/:id", (req, res) => {
  MotorBikeRent.findById(req.params.id,(err,rent)=>{
    const {brand,model,horsePower,city,price,use,recogida,entrega,img,bikeType} = req.body;
    const updates = {brand,model,horsePower,city,price,use,recogida,entrega,img,bikeType};
    
    MotorBikeRent.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(newMotorBikeRent => res.status(200).json(newMotorBikeRent))
    .catch(error => res.status(500).json(error));
  })
});

//DELETE RENT
router.post("/delete/:id", (req, res) => {
  MotorBikeRent.findByIdAndRemove(req.params.id)
    .then(() => res.status(200).json({message:'removed'}))
    .catch(e => res.status(500).json(e));
});
module.exports = router;
