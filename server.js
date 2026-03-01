
import express from 'express';
import routing from './approuting/common/aapcommon.js';
const app = express();
import { configDotenv } from "dotenv";
configDotenv();
const myport = process.env.PORT || 9800




app.use(routing);
app.use(express.json());


app.listen(myport,()=>{
    console.log("server running");
});
