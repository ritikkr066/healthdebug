
// import { Medicines } from "@/lib/model/medicin";
import { Medicins } from "@/lib/medi";
import { getResponseMessage } from "@/lib/responseMsg";
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        const rooms=await Medicins.find();
        return NextResponse.json(rooms);
    } catch (error) {
        return getResponseMessage("Error in getting doctor profile",404,false );
    }

}

export async function POST(request){
    const{medi,price}= await request.json()

    const rooms=new Medicins({
        medi,price
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