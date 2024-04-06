import { connectionSrt } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"


export async function GET(request){
    let users=[]
    try {
        users= await User.find().maxTimeMS(20000);  
    } catch (error) {
       console.log("get-error",error);
       return NextResponse.json({
        message:"failed to get user",
        success:false
       }) 
    }
    return NextResponse.json(users);
}

export async function POST(request){
    //fetch user detail from request
    const {username,email,phone,password,address}= await request.json();
    try {
    const data=await User.findOne({email})
    if(data){
        const response=NextResponse.json({
            success:false,
            message:"email already registered"
         },{
        status:201,
         }); 
        return response;
    }
    //create user object with  user model
   const user= new User({
        username,email,phone,password,address
    })
    
        //save the object to database
        user.password= await bcrypt.hash(user.password,parseInt(process.env.BCRYPT_SALT));
        console.log(user);
        const createdUser=await user.save();

         const response=NextResponse.json({
            success:true,
            message:"registration sucessfull"
         },{
        status:201,
         }); 
        return response;
    
}catch (error) {
        console.log("creation->",error);
        return NextResponse.json({
            message:"userid must be unique",
            status:false,
        },{status:400})
    }

}