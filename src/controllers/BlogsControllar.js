
import mongoose from "mongoose"
import Blog from "../model/BlogsModel.js"

//create blog
export const createBlog = async(req,res)=>{
    const data = req.body
    if(!data.title || !data.coverImg || !data.description || !data.author || !data.authorDetails){
        return res.status(400).json({success:false,message:'please provide all field'})
    }

    try {
        const blog = await Blog.create(data)
        res.status(201).json({success:true,data:blog})
    } catch (error) {
        console.log('Error in create blog section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }
}

//read blog
export const getBlog = async(req,res)=>{
    try {
        const blogs = await Blog.find({})
        res.status(200).json({success:true,data:blogs})
    } catch (error) {
        console.log('Error in create blog section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }
}

//update blog
export const updateBlog = async(req,res)=>{
    const {id} = req.params
    const updatedInfo = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:'invalid id'})
    }

    try {
        const updatedData = await Blog.findByIdAndUpdate(id,updatedInfo,{new:true})
        res.status(200).json({success:true,message:'updated successful',data:updatedData})
    } catch (error) {
        console.log('Error in update blog section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }
}


//delete blog
export const deleteBlog = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:'invalid id'})
    }

    try {
        await Blog.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'deleted successful'})
    } catch (error) {
        console.log('Error in delete blog section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }

}
