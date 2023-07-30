import connect from "@/utils/db"
import { NextResponse } from "next/server"
import Post from "@/models/post"

export const GET = async (request)=>{
    try{
        await connect()

        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts),{status:200})
    }catch(err){
        return new NextResponse("error",{status:500})
    }

    
}