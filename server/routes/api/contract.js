const express = require("express");
const Contract = require("../../models/Contract");
const router = express.Router();


//Create new Contract
router.post("/newcontract/:rentId", (req, res) => {
    console.log(req.user)
    const newContract = new Contract({
        motorBikeId:req.params.rentId,
        arrendatarioId:req.user.id
    });
    newContract.save()
    .then(newContractSaved=> res.status(200).json(newContractSaved))
    .catch(err=>res.status(500).json(err))
      console.log('Contract CREATED')
  });

  //DELETE RENT
router.post('/delete/:id',(req,res)=>{
    Contract.findByIdAndRemove(req.params.id)
    .then(ctrc => res.status(200).json(ctrc))
    .catch(e => res.status(500).json(error));
  })

  module.exports = router;