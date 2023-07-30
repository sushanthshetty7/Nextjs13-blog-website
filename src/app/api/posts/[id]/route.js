import connect from "@/utils/db"
import { NextResponse } from "next/server"
import Post from "@/models/post"

export const GET = async (request,{params})=>{
    const {id} = params
    try{
        await connect()

        const posts = await Post.findById(id)
        return new NextResponse(JSON.stringify(posts),{status:200})
    }catch(err){
        return new NextResponse("error",{status:500})
    }

    
}