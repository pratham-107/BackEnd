

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


                 //connecting database//

app.get('/register', (req, res)=>{
    res.render('register');
})

app.post('/register', (req, res)=>{
    const  {Username, Password, Email} = req.body;  //copy image to compare with schema//
     userModel.create({
        Username : Username,
        Password : Password,
        Email    : Email
    })

    res.send("user registered");
})


app.listen(3000);