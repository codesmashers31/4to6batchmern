import mongoose from "mongoose";


const connectDb = async ()=>{

   // console.log(mongoose);
    

   try {

    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database Connected Successfuly ${conn.connection.host}`);
    
    
   } catch (error) {

    console.log('Error',error);
    
    
   }



}


export default connectDb