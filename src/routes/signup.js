const express = require('express');
const router = express.Router();
const User = require('../models/signup');
const {signup,signin,requiresignin} =require('../controllers/signup');
// routing for the signup process
router.get('/signup', (req, res) => {
    res.render('signup');
});
router.post('/signup',signup);

router.get('/signin', (req, res) => {
  res.render('login');
})

router.post('/signin',signin);

router.post('/profile',requiresignin,(req,res)=>{
  res.status(200).json({
    message: 'THIS IS THE PROFILE'
  })
})


module.exports= router;