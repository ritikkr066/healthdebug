// import { Doctors } from "@/lib/model/doctor";
// import { Doctors } from "@/lib/model/doctor";
import { Doctrs } from "@/lib/model/doctor1";
import { getResponseMessage } from "@/lib/responseMsg";
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        const doctors=await Doctrs.find();
        return NextResponse.json(doctors);
    } catch (error) {
        return getResponseMessage("Error in getting doctor profile",404,false );
    }

}

export async function POST(request){
    const{name,speciality,experiance,qualification,hospital,address,docid,phoneno}= await request.json()

    const doctor=new Doctrs({
        name,speciality,experiance,qualification,hospital,address,docid,phoneno
    })
    try {
        const createDoctors=await doctor.save();
        return NextResponse.json(doctor,{success:true,status:201});
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failer to create doctor-profile",
            success:false,
           
        },{status:400})
    }
}