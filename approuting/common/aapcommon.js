"Access-Control-Allow-Origin"
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

// app.get("/alldata",async(req,res)=>{
    
//     const abc = await userSchema.find();
//     res.status(280).json({data:abc})
//     console.log(abc);
// });


app.get("/alldata",async(req,res)=>{
    
    const abc = await userSchema.find();
    console.log(abc.length);
    if(abc.length>=1)
    {
         res.status(280).json({data:abc})
    }
    else{
        res.status(420).json({data:abc,msg:"data not found",status:450});
    };
});


app.get("/student",async(req,res)=>{
    const allstudents = await userSchema.find({sno:{$gt:20}})
    res.status(200).json({data:allstudents,msg:"students list",status:211})
});


app.post("/registor",async(req,res)=>{
    console.log(req.body);
    const mydata = {names,age,phone} = req.body;
    const myform = await userSchema.insertOne(mydata);
    res.status(200).json({data:myform,msg:"insert new document",status:"201"}) 
})







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

