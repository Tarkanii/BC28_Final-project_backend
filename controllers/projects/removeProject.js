const {NotFound} = require("http-errors");
const { Project } = require("../../models/project")

const removeProject = async(req, res)=> {
    const {id} = req.params;
    const data = await Project.findByIdAndRemove(id);
    if(!data){
        throw new NotFound(`Project with id=${id} not found`)
    }
    res.json({
        status: "success",
        code: 200,
        data,
    })
}

module.exports = removeProject;