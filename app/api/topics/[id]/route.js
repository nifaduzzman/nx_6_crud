import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";



export async function PUT(request,{params}) {
  const {id} = params

  const {title,description} = await request.json();
  await connectMongoDB()
  await Topic.findByIdAndUpdate(id,{title,description});
  return NextResponse.json({message:"Updated item"})
  
}



export async function GET(request,{params}) {
  const {id }= params
  await connectMongoDB()
  const topic = await Topic.find({_id:id})
  return NextResponse.json({topic},{status:201})
}