const { Project } = require("../../models/project")


const getAllProjects = async(req, res)=> {
    const data = await Project.find({});
    res.json({
        status: "success",
        code: 200,
        data,
    })
}
module.exports = getAllProjects;