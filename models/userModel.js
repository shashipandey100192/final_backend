import mongoose from "mongoose";

const usertype = new mongoose.Schema({
name:{},
email:{},
pass:{},
dob:{}
})


const userSchema = mongoose.model("xyz",usertype);
export default userSchema
