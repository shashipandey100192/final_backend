
import express from 'express';
import mydb from '../../appconnection/dbconnection.js';
import userSchema from '../../models/userModel.js';
const app = express.Router();






app.get("/",(req,res)=>{
    res.send("welcome to express js");
});

app.get("/about",(req,res)=>{
    res.send("welcome to about page");
});

app.get("/alldata",async(req,res)=>{
    
    const abc = await userSchema.find();
    // res.send("welcome to about page",{data:abc});
    res.status(280).json({data:abc})
    console.log(abc);


});

export default app









// const express = require('express');
// const app = express.Router();

// app.get("/",(req,res)=>{
//     res.send("welcome to express js");
// });

// app.get("/about",(req,res)=>{
//     res.send("welcome to about page");
// });

// module.exports = app

