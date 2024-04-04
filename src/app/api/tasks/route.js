import { NextResponse } from "next/server";
import { Task } from "@/lib/model/task";
import { getResponseMessage } from "@/lib/responseMsg";

//get all tasks
export async function GET(request){
    try {
        const tasks=await Task.find();
        return NextResponse.json(tasks);
    } catch (error) {
        return getResponseMessage("Error in getting task",404,false );
    }
}

//create all the tasks
export async function POST(request){
    const {name,age,date,reason,userId}=await request.json();

    try {
        
        const task=new Task({
            name,
            age,
            date,
            reason,
            userId
        });
       const createdTask= await task.save();
       return NextResponse.json(task,{success:true,status:201})
    } catch (error) {
        console.log("task error",error)
       return NextResponse.json({
        message:"Failed to create task!!",
        success:false,
       
       }) 
    }
}

//