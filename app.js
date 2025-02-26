

const express = require('express');
const app = express();
app.set('view engine', 'ejs')

const userModel = require('./models/user');
const db = require('./config/db');

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.use((req,res,next)=>{
    console.log("security verified");
    return next();
})

app.get('/', (req, res)=>{
    res.send("this is home page");
})

app.get('/signup', (req,res)=>{
    res.render('signup');
})

app.get('/login',(req, res)=>{
    res.render('login');
})

app.get('/form', (req, res)=>{
    res.render('form');
})

// app.get('/form-submitted', (req, res)=>{
//     console.log(req.query);
//     res.send("Form Submitted");
// })

app.post('/form-submitted', (req, res)=>{
    console.log(req.body);
    res.send("Form Submitted");
})

app.listen(3000);