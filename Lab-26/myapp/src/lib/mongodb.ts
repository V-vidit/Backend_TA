import mongoose from 'mongoose'
const connection =async()=>{
    try{
        if(mongoose.connection.readyState>=1){
            return;
        }
        await mongoose.connect(process.env.mongourl!)
        console.log("connected to db");
    }catch(err){
        console.log(err);
        
    }
}

export default connection