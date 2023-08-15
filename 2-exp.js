const express = require('express');
const ostest = require('./ostest.js')
const osping = require('tellrv-server-connect')

// const server = express();


    const server = express();

server.get('/',(req,res) => {
    res.send("Welcome to Monitor Agent Version 1.0.0")
})

server.get('/timestamp',(req,res) => { 
    var newDate = new Date();
    const obj1 = {"moule": "root", "Ssystem": "Host1", "date": newDate}
    res.send(obj1)
})
server.get('/osinfo',(req,res) => {
    res.send(ostest())
})

server.listen(4242,() => {
    // osping('rovyas.com')
    console.log("Server started listening in 4242")
})
