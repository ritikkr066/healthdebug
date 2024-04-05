import { Doctors } from "@/lib/model/doctor";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {doctorId}=params;
    const doctor=await Doctors.findById(doctorId);
    return NextResponse.json(doctor);
}