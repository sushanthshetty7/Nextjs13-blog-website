import mongoose from "mongoose";

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.REACT_APP_MONGODB_URI)
    }catch(err){
        throw new Error("connection failed",err)
    }
}


export default connect;