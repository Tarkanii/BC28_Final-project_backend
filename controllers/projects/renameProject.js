const {NotFound} = require("http-errors");
const { Project } = require("../../models/project")

const renameProject = async(req, res)=> {
    const {projectId} = req.params;
    const data = await Project.findByIdAndUpdate({_id:projectId},req.body, {new: true});
    if(!data){
        throw new NotFound(`Project with id=${projectId} not found`)
    }
    res.json({
        status: "success",
        code: 200,
        data,
    })
}

module.exports = renameProject;