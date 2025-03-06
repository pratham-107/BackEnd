const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username : String,
    Password : String,
    Email : String



    // name:{
    //     type : String,
    //     require: true,
    //     unique : true
    // },
    // email: {
    //     type : String,
    //     require: true,
    //     unique : true
    // },
    // password: {
    //     type : String,
    //     require: true,
    // }
});

const userModel = mongoose.model('User', userSchema); //copy

module.exports = userModel;        //server

//we cant change schema after running the server//