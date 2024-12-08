
import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
        img:{
            type:String,
            require:true
        },
        name:{
            type:String,
            require:true
        },
        position:{
            type:String,
            require:true
        },
    },
    {
        timestamps:true
    })

const Team = mongoose.model('teams',teamSchema)
export default Team
