const express = require('express');
const bikeRent = require('./rent');
const contract = require('./contract');
const user = require('./user');

const router = express.Router();

router.use('/rent', bikeRent);
router.use('/contract', contract);
router.use('/user', user);
    
module.exports = router;