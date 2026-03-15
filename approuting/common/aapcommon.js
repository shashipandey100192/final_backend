"Access-Control-Allow-Origin"
import express from 'express';
import mydb from '../../appconnection/dbconnection.js';
import userSchema from '../../models/userModel.js';
import studensModel from '../../models/studentAdmission.js';
const app = express.Router();






app.get("/", (req, res) => {
    res.send("welcome to express js");
});

app.get("/about", (req, res) => {
    res.send("welcome to about page");
});

// app.get("/alldata",async(req,res)=>{

//     const abc = await userSchema.find();
//     res.status(280).json({data:abc})
//     console.log(abc);
// });


app.get("/alldata", async (req, res) => {

    const abc = await studensModel.find();
    console.log(abc.length);
    if (abc.length >= 1) {
        res.status(280).json({ data: abc })
    }
    else {
        res.status(420).json({ data: abc, msg: "data not found", status: 450 });
    };
});


app.get("/student", async (req, res) => {
    const allstudents = await userSchema.find({ sno: { $gt: 20 } })
    res.status(200).json({ data: allstudents, msg: "students list", status: 211 })
});


app.post("/registor", async (req, res) => {
    console.log(req.body);
    const { names, age, phone } = req.body;
    const myform = await userSchema.insertOne({ names, age, phone });
    res.status(200).json({ data: myform, msg: "insert new document", status: "201" })
});


// app.post("/studentform", async (req, res) => {

//     const { sname, roll, mobile, email, dob, password, gender, fathername, working } = req.body;
//     const uniqueemail = await studensModel.findOne({ email: email });
//     if (!uniqueemail) {
//         const studentdata = await studensModel.insertOne({ sname, roll, mobile, email, dob, password, gender, fathername, working });
//         res.status(200).json({ data: studentdata, msg: "data insert successfully", status: 202 })
//     }
//     else {
//         res.status(200).json({ msg: "Your Email id Already Exist", status: 350 })   
//     }
// })


app.post("/studentform", async (req, res) => {

    const { sname, roll, mobile, email, dob, password, gender, fathername, working } = req.body;
    const uniqueemail = await studensModel.findOne({ email: email });
   
   try{
    if (!uniqueemail) {
        const studentdata = await studensModel.insertOne({ sname, roll, mobile, email, dob, password, gender, fathername, working });
        res.status(200).json({ data: studentdata, msg: "data insert successfully", status: 202 })
    }
    else {
        res.status(200).json({ msg: "Your Email id Already Exist", status: 350 })   
    }
    }
    catch(error)
    {
        res.status(200).json({ msg: "error code", status: 355, errorstype:error.message })   
    }

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

