
// const express = require('express');
// const app = express();
// const routing = require('./approuting/common/aapcommon.js');
// require('dotenv').config();
// const myport = process.env.PORT;


import express from 'express';
import routing from './approuting/common/aapcommon.js';
const app = express();
import { configDotenv } from "dotenv";
configDotenv();
const myport = process.env.PORT || 9800




app.use(routing);



app.listen(myport,()=>{
    console.log("server running");
});
