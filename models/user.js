const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username : String,
    email : String,
    passwod : String



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

const userModel = mongoose.model('user', userSchema); //copy

module.exports = userModel;        //server

//we cant change schema after running the server//