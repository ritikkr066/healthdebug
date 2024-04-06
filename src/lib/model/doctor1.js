import mongoose from "mongoose";

const DocSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"doctor-name is required"]
    },
    speciality:{
        type:String,
        required:[true],
       
    },
    experiance:{
        type: String,
        required:[true]
    },
    qualification:{
        type:String,
        required:true
    },
    hospital:{
       type:String,
       required:true
    },
    address:{
        type:String,
        required:[true,"Address is required"]
    },
    docid:{
        type:Number,
        required:[true,"doctorid is required and must be unique"],
        unique: true
    },
    phoneno:{
        type: Number,
        required:[true,"Phone no of 10 digits"]
    },


})

export const Doctrs=mongoose.models.doctrs || mongoose.model("doctrs",DocSchema)