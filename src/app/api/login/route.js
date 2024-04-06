const { User } = require("@/lib/model/user");
const { NextResponse } = require("next/server");
import bcrypt from "bcryptjs"
import  Jwt  from "jsonwebtoken";


export async function POST(request){
    const {email,password}=await request.json();
    try {
        
       const user= await User.findOne({
            email:email,
        })
        if(user==null){
            throw new Error("user not-found")
        }
        //2.password check
       const matched= bcrypt.compareSync(password,user.password);
    //    console.log(password);
    //    console.log(user.password);
    //    console.log(matched)
       if(!(matched)){
        throw new Error("user email-password not-matched")
       }
       //3/genetate token
       const token=Jwt.sign({
        _id:user._id,
       
       },process.env.JWT_KEY)

       //4. create nextResponse --cookie
       const response= NextResponse.json({
        message:"Login successfully!!",
        success:true
       })

       response.cookies.set("authToken",token,{
        expiresIn:"1d",
        httpOnly:true
       })
      
        console.log(user);
        console.log(token)
        return response
        // return NextResponse.json({
        //     message:"success"
        // })
    } catch (error) {
        return NextResponse.json({
            message:error.message,
            success:false
        },{status:404})
    }
}