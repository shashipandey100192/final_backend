
import express from 'express';
const app = express();
import cors from 'cors';
import routing from './approuting/common/aapcommon.js';

import { configDotenv } from "dotenv";
configDotenv();
const myport = process.env.PORT || 9800



app.use(express.json());
app.use(cors());
app.use(routing);


app.listen(myport,()=>{
    console.log("server running");
});
