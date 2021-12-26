const { NotFound } = require("http-errors");
const { Project } = require("../../models/project")
const { User } = require("../../models")

const updateParticipants = async(req, res)=> {
    const {id} = req.params;
    const { email } = req.body
    console.log(email)

    const userData = await User.findOne({ "email" : email })
  
    // const data = await Project.findByIdAndUpdate(id, {"$push": { "Participants" : userData._id }}, { new: true }).populate("participants", "email");
    const data = await Project.findByIdAndUpdate({_id :id },{"$push":{ "participants" : userData._id }}, { new: true }).populate("participants", "email")
    
    if(!data){
        throw new NotFound(`Project with id=${id} not found`)
    }
    res.json({
        status: "success",
        code: 200,
        data,
    })
}

module.exports = updateParticipants;