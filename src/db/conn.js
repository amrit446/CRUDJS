const express = require("express");
const mongoose = require("mongoose");


const port=process.env.PORT || 8000

const url='mongodb://localhost/AlienFBex'

mongoose.connect(url, 
{ useNewUrlParser: true,
 useNewUrlParser:true,
useUnifiedTopology:true}
)
.then(()=>{
    console.log("connection successful")
})
.catch((e)=>{
    console.log("No connection");
})