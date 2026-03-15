import mongoose from "mongoose";

const studenDetails = new mongoose.Schema({
    sname: {
        type: String,
        required: true,
    },
    roll: {
        type: Number
    },
    email: {
        type: String,
        unique:true
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
        type: String
    },
    password: {
        type: String
    },
    currentdate:{
        type:Date,
        default:Date.now()
    }
    


},{timestamps:true})

const studensModel = mongoose.model("students_info", studenDetails);
export default studensModel
