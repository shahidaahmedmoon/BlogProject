
import mongoose from "mongoose"
import Service from "../model/ServicesModel.js"



//create service
export const createService = async(req,res)=>{
    const data = req.body
    if(!data.title || !data.details){
        return res.status(400).json({success:false,message:'please provide all field'})
    }

    try {
        const service = await Service.create(data)
        res.status(201).json({success:true,data:service})
    } catch (error) {
        console.log('Error in create service section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }
}

//read service
export const getService = async(req,res)=>{
    try {
        const services = await Service.find({})
        res.status(200).json({success:true,data:services})
    } catch (error) {
        console.log('Error in read services section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }
}

//update service
export const updateService = async(req,res)=>{
    const {id} = req.params
    const updatedInfo = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:'invalid id'})
    }

    try {
        const updatedData = await Service.findByIdAndUpdate(id,updatedInfo,{new:true})
        res.status(200).json({success:true,message:'updated successful',data:updatedData})
    } catch (error) {
        console.log('Error in update service section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }
}


//delete service
export const deleteService = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:'invalid id'})
    }

    try {
        await Service.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'deleted successful'})
    } catch (error) {
        console.log('Error in delete service section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }

}
