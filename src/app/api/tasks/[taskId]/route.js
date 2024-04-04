
//api/tasks/{taskId}

import { Task } from "@/lib/model/task";
import { getResponseMessage } from "@/lib/responseMsg";
import { NextResponse } from "next/server";

//get single task
export async function GET(request,{params}){
    const {taskId}=params;
    try {
        const task = await Task.findById(taskId);
        return NextResponse.json(task)
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in getting task",404,false);
    }
}

//change task
export async function PUT(request,{params}){
    try {
        const {taskId}=params;

        const{age,reason,date,status}=await request.json();
        let task=await Task.findById(taskId);

        task.age=age,
        task.reason=reason,
        task.status=status,
        task.date=date
        //...

      const updatedtask=await task.save();
      return NextResponse.json(updatedtask);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in updating task",500,false)
    }
}

//task deleted
export async function DELETE(request,{params}){
    try {
        const {taskId}=params;
        await Task.deleteOne({
            _id:taskId
        })
        return getResponseMessage("Task deleted!!",200,true)
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in deleting task",500,false);
    }
}