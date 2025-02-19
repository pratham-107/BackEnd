// const catMe = require("cat-me");

// console.log("hello world");

// const catme = require('cat-me');
// console.log(catme());

// const dog = require('dog-image-fetcher');
// console.log(dog());

// const http = require('http');
// const server = http.createServer((req, res) =>{
//     res.end("Hello world");
// })
// server.listen(3000);


// const http = require('http');
// const server = http.createServer((req, res) =>{
//     if(req.url == "/"){
//         res.end("Welcome to home page");
//     }
//     if(req.url == "/about"){
//         res.end("Welcome to about page");
//     }
//     if(req.url == "/profile"){
//         res.end("Welcome to profile page");
//     }
// })

// server.listen(3000);


// const generate = require('random-password');
// console.log(generate(10));


// const generate = require('eff-diceware-passphrase');
// console.log(generate(1));


const express = require('express');
const app = express();
app.set('view engine', 'ejs')

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