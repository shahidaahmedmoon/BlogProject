
import mongoose from "mongoose";


const ServiceSchema = new mongoose.Schema(

    {
        title:{type:String,required:true},
        description: {type:String,required:true},


    },
    {
        timestamps:true,
        VersionKey:false
    }
)

const Service = mongoose.model("services", ServiceSchema);

export default Service;
