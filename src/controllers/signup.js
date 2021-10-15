const User = require('../models/signup');
const jwt=require('jsonwebtoken');
exports.signup= (req,res)=>{
    User.findOne({ email: req.body.email }).exec(async (error, user) => {
        if (user)
          return res.status(400).json({
            error: "User already registered"
          });
        const { firstName, lastName, email, hash_password, confirm_hash_password } = req.body
        const _user = new User({
          firstName,
          lastName,
          email,
          hash_password
        });
        if(hash_password===confirm_hash_password){
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
}

exports.signin=(req,res) => {
    User.findOne({ email: req.body.email}).exec((err, user) => {
        if(err){
            return res.status(400).json({message:"SOMETHING WENT WRONG"});
        }
        if(user){
            if(user.authenticate(req.body.password)){
                const token=jwt.sign({_id:user._id},process.env.JWT_KEY,{expiresIn:"5m"});
                const {firstName,lastName,email,fullName}=user;
                res.status(200).json({
                    token, 
                    user:{
                        firstName,lastName,email,fullName
                    }
                })
            }else{
                return res.status(400).json({
                    message: "Invalid PASSWORD"
                })
            }

        }

    })
}

exports.requiresignin= (req,res,next) => {
    const token=req.headers.authorization.split(' ')[1];
    const user=jwt.verify(token,process.env.JWT_KEY);
    req.user=user;
    next();
}