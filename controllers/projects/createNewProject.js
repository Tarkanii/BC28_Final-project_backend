const { Project } = require("../../models/project")

const createNewProject = async (req, res) => {
    const data = await Project.create(req.body);
    res.status(201).json({
        status: "success",
        code: 201,
        data,
    })
};

module.exports = createNewProject;