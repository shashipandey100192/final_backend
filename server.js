
'Access-Control-Allow-Origin'
import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
import cors from 'cors';
import routing from './approuting/common/aapcommon.js';

import { configDotenv } from "dotenv";
configDotenv();
const myport = process.env.PORT || 9800

const allowedOrigins = [
  "http://localhost:3000",
  "https://final-frontend-aroc.onrender.com"
];



app.use(express.json());
app.use(cors({
  origin: function(origin, callback){
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(cookieParser());
app.use(routing);
app.set("trust proxy", 1);


app.listen(myport, () => {
    console.log(`server runnin: ${myport}`);
});
