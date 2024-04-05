// import { Doctors } from "@/lib/model/doctor";
// import { Rooms } from "@/lib/model/room";
// import { Rooms } from "@/lib/model/rooms";
import { Roomss } from "@/lib/model/rooms";
import { getResponseMessage } from "@/lib/responseMsg";
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        const rooms=await  Roomss.find();
        return NextResponse.json(rooms);
    } catch (error) {
        return getResponseMessage("Error in getting doctor profile",404,false );
    }

}

export async function POST(request){
    const{patient,roomNo,address}= await request.json()

    const rooms=new  Roomss({
        patient,roomNo,address
    })
    try {
        const createRooms=await rooms.save();
        return NextResponse.json(rooms,{success:true,status:201});
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failer to create patient-room",
            success:false,
           
        },{status:400})
    }
}