import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique: true
    },
    phone:{
        type: Number,
        required:[true,"Phone no of 10 digits"]
    },
    password:{
        type:String,
        required:[true,"Password required"]
    },
    // address:{
    //     street:String,
    //     city:String,
    //     State:String,
    //     pincode:Number
    // }
    address:{
        type:String,
        required:[true,"Address is required"]
    }

})

export const User=mongoose.models.users || mongoose.model("users",UserSchema)