const User = require('../models/signup');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs'); 
const {secure_password}=require('../utils');
exports.signup= (req,res,next) =>{
    User.findOne({ email: req.body.email }).exec(async (error, user) => {
        if (user)
          return res.status(400).json({
            error: "User already registered"
          });
        const { firstName, lastName, email, password, confirm_password } = req.body
        
        const hash_password=await secure_password(password);
        const _user = new User({
          firstName,
          lastName,
          email,
          hash_password
        });
        if(password===confirm_password){
          _user.save().then(
            ()=>{
                res.status(201).json({
                    message:"ACCOUNT CREATED SUCCESSFULLY"
                })
            }
          ).catch((error)=>{
            res.status(400).json({
                message:"something went wrong"
            })
          })
        }
        else{
          return res.status(400).json({
              message:"PASSWORDS ARE NOT MATCHING"
          })
        }
      });
      next();
}

exports.signin=(req,res,next) => {
    User.findOne({ email: req.body.email}).exec((err, user) => {
        if(err){
            return res.status(400).json({message:"User is not registered"});
        }
        if(user){
            if(user.authenticate(req.body.password)){
                const token=jwt.sign({_id:user._id},process.env.JWT_KEY,{expiresIn:"1h"});
                const {_id,firstName,lastName,email,fullName}=user;
                // res.status(201).render('home_page');
                // res.status(200).json({
                //   token,
                //   user:{
                //     firstName,lastName,email,fullName
                //   }
                // })
            }
            else{
                return res.status(400).json({
                    message: "Invalid PASSWORD"
                })
            }
        }
    })
    next();
}

exports.requiresignin= (req,res,next) => {
    const token=req.headers.authorization.split(' ')[1];
    const user=jwt.verify(token,process.env.JWT_KEY);
    req.user=user;
    next();
}