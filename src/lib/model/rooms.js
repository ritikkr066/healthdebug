import mongoose from "mongoose";

const RoomsSchema=new mongoose.Schema({
    patient:{
        type:String,
        required:[true,"patient name is required"]
    },
   address:{
        type:String,
        required:[true,"Address is required"]
    },
    roomNo:{  
        type: Number,
        required:[true,"room no is required"],
        unique:true
    }
})


export const Roomss=mongoose.models.roomss || mongoose.model("roomss",RoomsSchema)