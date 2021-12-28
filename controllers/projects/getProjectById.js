const {NotFound} = require("http-errors");
const { Project } = require("../../models/project")

const getProjectById = async(req, res)=> {
    const {projectId} = req.params;
    const data = await Project.findById(projectId).populate("participants", "email").populate("sprints");
    if(!data){
        throw new NotFound(`Project with id=${projectId} not found`)
    }
    res.json({
        status: "success",
        code: 200,
        data,
    })
}

module.exports = getProjectById;