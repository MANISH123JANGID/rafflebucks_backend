const express = require('express');
const router = express.Router();
const User = require('../models/signup');
const {signup,signin,requiresignin} =require('../controllers/signup');
// routing for the signup process
router.get('/signup', (req, res) => {
    res.render('signup');
});  
router.post('/signup',signup,(req, res)=>{
  res.render('home_page');
});

router.get('/signin', (req, res) => {
  res.render('signin');
})

router.post('/signin',signin,(req, res)=>{
  res.render('home_page');
});

router.post('/profile',requiresignin,(req,res)=>{
  res.status(200).json({
    message: 'THIS IS THE PROFILE'
  })
})

router.get('/mywallet',(req,res)=>{
  res.render('wallet');
})





module.exports= router;