
'Access-Control-Allow-Origin'
import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
import cors from 'cors';
import routing from './approuting/common/aapcommon.js';

import { configDotenv } from "dotenv";
configDotenv();
const myport = process.env.PORT || 9800



app.use(express.json());
app.use(cors({
    origin: "https://final-frontend-aroc.onrender.com/",
    credentials: true,
}));
app.use(cookieParser());
app.use(routing);


app.listen(myport, () => {
    console.log(`server runnin: ${myport}`);
});
