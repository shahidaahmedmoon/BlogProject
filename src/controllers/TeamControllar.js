
import mongoose from "mongoose"
import Team from "../model/TeamsModel.js"



//create Team
export const createTeam = async(req,res)=>{
    const data = req.body
    if(!data.name || !data.img  || !data.position){
        return res.status(400).json({success:false,message:'please provide all field'})
    }

    try {
        const team = await Team.create(data)
        res.status(201).json({success:true,data:team})
    } catch (error) {
        console.log('Error in create Team section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }
}

//read Team
export const getTeam = async(req,res)=>{
    try {
        const teams = await Team.find({})
        res.status(200).json({success:true,data:teams})
    } catch (error) {
        console.log('Error in create Teams section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }
}

//update Team
export const updateTeam = async(req,res)=>{
    const {id} = req.params
    const updatedInfo = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:'invalid id'})
    }

    try {
        const updatedData = await Team.findByIdAndUpdate(id,updatedInfo,{new:true})
        res.status(200).json({success:true,message:'updated successful',data:updatedData})
    } catch (error) {
        console.log('Error in update Team section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }
}


//delete Team
export const deleteTeam = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:'invalid id'})
    }

    try {
        await Team.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'deleted successful'})
    } catch (error) {
        console.log('Error in Team section',error)
        res.status(500).json({success:false,message:'Server Error'})
    }

}
