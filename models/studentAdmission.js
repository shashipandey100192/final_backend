import mongoose from "mongoose";

const studenDetails = new mongoose.Schema({
    sname: {
        type: String,
        required: true,
    },
    roll: {
        type: Number
    },
    sclass: {
        type: String
    },
    gender: {
        type: String
    },
    fathername: {
        type: String
    },
    mobile: {
        type: String
    },
    dob: {
        type: Date
    },
    working: {
        type: Boolean
    },
    password: {
        type: String
    },
    currentdate:{
        type:Date,
        default:Date.now()
    }
    


},{timestamps:true})

const studensModel = mongoose.model("abc", studenDetails);
export default studensModel
