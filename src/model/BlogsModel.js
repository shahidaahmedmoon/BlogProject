import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
        coverImg:{type:String, require:true},
        title:{type:String, require:true},
        description:{type:String,require:true},
        author:{type:String, require:true},
        authorDetails:{type:String, require:true},
    },
    {
        timestamps:true
    }
)

const Blog = mongoose.model('blogs',blogSchema)
export default Blog