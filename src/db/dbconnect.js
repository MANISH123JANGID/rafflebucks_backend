const mongoose=require('mongoose');
mongoose.connect(`mongodb://localhost:27017/rafflebucks`,{
   
}).then(()=>{
    console.log('SUCCESSFULLY CONNECTED WITH DATABASE');
}).catch((e)=>{
    console.log('ERROR IN CONNECTING WITH DATABASE');
})