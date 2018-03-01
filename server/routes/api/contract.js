const express = require("express");
const Contract = require("../../models/Contract");
const router = express.Router();

//Create new Contract
router.post("/newcontract:id/", (req, res) => {
    const newContract = new Contract({
    arrendadorId: req.body.brand,
      model: req.body.model,
      horsePower: req.body.horsePower,
      city: req.body.city,
      price: req.body.price,
      use: req.body.use,
      recogida: req.body.recogida,
      entrega: req.body.entrega,
      img: req.body.img
    });
    newContract.save()
    .then(newContractSaved=>{
      User.findOneAndUpdate({})
    })
    .catch(err=>res.status(500).json(err))
      console.log('RENT CREATED')
  });