const express = require("express");
const Contract = require("../../models/Contract");
const router = express.Router();


//Create new Contract
router.post("/newcontract/:rentId", (req, res) => {
    console.log(req.user)
    const newContract = new Contract({
        motorBikeId:req.params.rentId,
        arrendatarioId:req.user._id
    });
    newContract.save()
    .then(newContractSaved=> res.status(200).json(newContractSaved))
    .catch(err=>res.status(500).json(err))
  });

  //DELETE RENT
router.post('/delete/:id',(req,res)=>{
    Contract.findByIdAndRemove(req.params.id)
    .then(ctrc => res.status(200).json(ctrc))
    .catch(e => res.status(500).json(error));
  })

  router.get("/:id", (req, res) => {
    Contract.find({"arrendatarioId":req.params.id})
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

  module.exports = router;