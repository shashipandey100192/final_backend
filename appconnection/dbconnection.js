import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const dburl = process.env.DATABASE;

const mydb = mongoose.connect(dburl).then((d)=>{
    console.log("database connected successfully");
})

export default mydb


