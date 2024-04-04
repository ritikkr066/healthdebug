import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
   await  mongoose.connect(connectionSrt)
// await mongoose.connect(Connectionstart);
    let data=[]
    try {
          data= await Product.find();
         console.log(data)
    } catch (error) {
        data={success:false}
    }

    return NextResponse.json({result:data,success:true})
}

export async function POST(request){
    const payload=await request.json();
    await mongoose.connect(connectionSrt)
    // let product=new Product({
    //     // name:"Note",
    //     // price:1000,
    //     // color:"Black",
    //     // company:"Redmi",
    //     // category:"Phone"
    //     payload
    // })
    let product=new Product(payload)
    const result=await product.save();
    return NextResponse.json({result,success:true})
}