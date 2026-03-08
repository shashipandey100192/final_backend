import mongoose, { Types } from "mongoose";

const usertype = new mongoose.Schema({
names:{
    type:String,
    required:true

},
age:{
    type:Number,
    required:true,
    min: [50, 'minimum age limit 50'],
    max:[80, 'max age of students']
},
phone:{
    type:String
}
})

const userSchema = mongoose.model("xyz",usertype);
export default userSchema
