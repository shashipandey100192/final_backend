import mongoose, { Types } from "mongoose";

const usertype = new mongoose.Schema({
names:{
    type:String
},
age:{
    type:String
},
phone:{
    type:String
}
})

const userSchema = mongoose.model("xyz",usertype);
export default userSchema
