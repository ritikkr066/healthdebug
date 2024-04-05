import mongoose from "mongoose";

const MedicineSchema=new mongoose.Schema({
   
    name:{    
        type: String,
        required:[true,"patient name is required"],
        unique:true
    },
    price:{
        type:Number,
        required:[true,"price is required"],
    },
})


export const Medicines=mongoose.models.medicines || mongoose.model("medicines",MedicineSchema)