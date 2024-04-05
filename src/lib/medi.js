import mongoose from "mongoose";

const MediSchema=new mongoose.Schema({
   
    medi:{    
        type: String,
        required:[true,"medicine name is required"],
        unique:true
    },
    price:{
        type:Number,
        required:[true,"price is required"],
    },
})


export const Medicins=mongoose.models.medicins || mongoose.model("medicins",MediSchema)