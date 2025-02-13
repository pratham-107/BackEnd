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


// var joker = require("random-joke-getter");
 
// Get a random dad joke
// joker.getDadJoke(function(joke) {
//   console.log(joke);
// });

// const jokes = require('jokes');
// console.log(jokes());


// function fibo(n){
//     let series =[0,1];
//     for(let i =2; i<n; i++){
//         series.push(series[i-1] + series[i-2]);
//     }
//     return series;
// }
// console.log(fibo(5));


// console.log("hello world");


const express = require('express');
const app = express();
app.set('view engine', 'ejs')

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

app.listen(3000);