import { connectionSrt } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


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
    const {username,email,phone,password,address,userid}= await request.json();

    //create user object with  user model
   const user= new User({
        username,email,phone,password,address,userid
    })
    try {
        //save the object to database
        const createdUser=await user.save();

         const response=NextResponse.json(user,{
        status:201,
         }); 
        return response;
    } catch (error) {
        console.log("creation->",error);
        return NextResponse.json({
            message:"failed to create user",
            status:false
        })
    }
   

   

}