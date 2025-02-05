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


const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url == "/"){
        res.end("Welcome to home page");
    }
    if(req.url == "/about"){
        res.end("Welcome to about page");
    }
    if(req.url == "/profile"){
        res.end("Welcome to profile page");
    }
})

server.listen(3000);