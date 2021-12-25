const { Project } = require("../../models/project")


const getAllProjects = async(req, res)=> {
    const { q } = req.params
    const data = await Project.find( { $or: [{"owner": q}, {"participants" : q} ]}) 
    res.json({
        status: "success",
        code: 200,
        data,
    })
}
module.exports = getAllProjects;