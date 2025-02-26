const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://0.0.0.0/men').then(() =>{
    console.log('connected to database');
    
})

module.exports = db;