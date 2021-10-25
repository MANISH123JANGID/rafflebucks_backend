const bcrypt = require('bcryptjs');

exports.secure_password= async (pw)=>{
    return bcrypt.hash(pw,10);
}