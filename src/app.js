// EXPRESS FOR CREATING EXPRESS APP
const express= require('express');
// DOTENV FOR ENVIRONMENT VARIABLES
const env= require('dotenv');
// IMPORTING PATH FOR STATIC PAGE 
 const path =require('path');
 // importing hbs for registering partials
 const hbs = require('hbs');
// IMPORTING BODYPARSER FOR CONVERTING FROM JSON TO JS OBJECTS
const bodyParser= require('body-parser');
// importing routers
const userRoutes= require('./routes/signup');
//CREATING EXPRESS APP
const app= express();
//DATABASE CONNECTOR 
require('./db/dbconnect')
//CONFIGURING THE ENVIRONMENT VARIABLE
env.config();
// Getting the static path for the home page 
const static_path= path.join(__dirname,"../public");
// app using the static path 
// app.use(express.static(static_path));
// console.log(path.join(__dirname,"../public"));
// bodyparser to convert the json into js object
app.use(bodyParser.json());

app.use(express.urlencoded({extetended:false}));
//path fr the views folder
const template_path= path.join(__dirname,"../views");
// path for the partials 
const template_partials= path.join(__dirname,"../views/partials");
// static path for the public folder to access the css, images and js 
app.use(express.static("public"));

// setting the view engine to hbs 
app.set("view engine","hbs");
//setting the path for views
app.set("views",template_path);
// for this we require hbs and then we register partials using the path
hbs.registerPartials(template_partials);

app.get('/',(req, res)=>{
    res.render("home_page");
})

// using the routes
app.use('',userRoutes);

// listening on port 
app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT);
    console.log(`THE SERVER IS RUNNING ON PORT ${process.env.PORT}`);
});

