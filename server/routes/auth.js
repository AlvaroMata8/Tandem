const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const debug = require('debug')("server:auth");
const passport = require('passport');
// const multer  = require('multer');
// const upload = multer({ dest: './public/uploads/' });
const isLoggedIn = require("../middlewares/isLoggedIn");
const onlyMe = require('../middlewares/onlyMe');
const brcryptSalt = 10;

let loginPromise = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, e => e? reject(e):resolve(user))
  })
}

/* Create user */
router.post('/signup', (req, res, next) => {
  const {username,password,name,lastName,userImage,license,city} = req.body;
  if (!username || !password || !name || !lastName || !userImage || !license || !city) return res.status(400).json({ message: 'Fill all the camps!' })
  User.findOne({ username }, '_id')
    .then(foundUser =>{
      if (foundUser) return res.status(400).json({ message: 'The username already exists' });
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      const theUser = new User({
        username,
        password: hashPass,
        name,
        lastName,
        userImage,
        license,
        city
      });
      return theUser.save()
          .then(user => loginPromise(req,user))
          .then(user => {
            debug(`Registered user ${user._id}. Welcome ${user.username}`);
            res.status(200).json(req.user)
          }) 
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e)
    }) 
});

// LOG IN
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) return res.status(500).json({ message: 'Something went wrong' });
    if (!theUser) return res.status(401).json(failureDetails);
    loginPromise(req,theUser)
      .then(() => res.status(200).json(req.user))
      .catch(e => res.status(500).json({ message: 'Something went wrong' }));
  })(req, res, next);
});

//LOG OUT
router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

//CHECK IF IS LOGGED
router.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) return res.status(200).json({message:'El usuario esta conectado'});
  res.status(403).json({ message: 'Unauthorized' });
});

// GET PROFILE
router.get('/profile', isLoggedIn, (req, res, next) => {
  const userId  = req.user._id;
  User.findById(userId)
  .then((user)=>res.status(200).json({user}))
});

//EDIT USER
router.get('/profile/edit',isLoggedIn, (req, res, next) => {
  const userId  = req.user._id;

  User.findById(userId)
    .then((user)=>{
      res.status(200).json({ user});
    })
});

router.post('/profile/edit',(req, res, next) => {
  const userId  = req.user._id;
  const updates = {
    username: req.body.username,
    name: req.body.name,
    lastName: req.body.lastName,
    userImage: req.body.userImage,
    city: req.body.city,
    license:req.body.license,
    password:req.body.password
  };

  // if (req.body.password != ""){
  //   const password = req.body.password;
  //   let salt = bcrypt.genSaltSync(brcryptSalt);
  //   let hashPass = bcrypt.hashSync(password, salt);
  //   updates.password = hashPass;
  // }

  User.findByIdAndUpdate(userId,updates)
  .then((user) => {
    res.status(200).json({user})
  })

});


router.get('/profile/:id', (req, res, next) => {
  console.log('me cago en mis muertos')
  const userId  = req.params.id;
  const loggedId  = req.user._id;

  User.findById(userId)
    res.status(200).json({ userId , loggedId});
 
});

// DELETE USER
router.get('/profile/delete/:id',onlyMe,(req, res, next) => {
  const userId  = req.user._id;

  User.findByIdAndRemove(userId)
    .then((user) => res.status(200).json({message:'A la mierda!'}))
});

module.exports = router;
