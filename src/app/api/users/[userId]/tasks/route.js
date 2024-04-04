//localhost:3000/api/users/[userId]/tasks
import { Task } from "@/lib/model/task";
import { getResponseMessage } from "@/lib/responseMsg";
import { NextResponse } from "next/server";
export async function GET(request,{params}){
    const {userId}=params;
    try {
      const tasks=await Task.find({
            userId:userId,
        });
        return NextResponse.json(tasks);
        
    } catch (error) {
        return getResponseMessage("Failed to get tasks",404,false);
    }

}