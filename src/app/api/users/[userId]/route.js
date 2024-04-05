import { User } from "@/lib/model/user"
import { NextResponse } from "next/server"

//get one user
export async function GET(request,{params}){
        const {userId}=params

    const user =await User.findById(userId).select("-password")
    
    return NextResponse.json(user)
}

//delete user 
export async function DELETE(request,{params}){
    const {userId}=params
    try {
        await User.deleteOne({
            userid:userId
        })
        return NextResponse.json({
            message:"user deleted successfully",
            success:true
        })
    } catch (error) {
        return NextResponse.json({
            message:"Error in delete",
            success:false,
            status:404
        })
    }
}
//update user

export async function PUT(request,{params}){
    const {userId}=params;
   const {username,password,phone,address}= await request.json();
   try {
   const user= await User.findById(userId)
   user.username=username;
   user.password=password;
   user.phone=phone;
   user.address=address;
   
   const updatedUser=await user.save();
   return NextResponse.json({
    updatedUser
   })

   } catch (error) {
        return NextResponse.json({
            message:"failed to update user",
            success:false
        })
   }

}