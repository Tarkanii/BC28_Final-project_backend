const { Project } = require("../../models/project")

const createNewProject = async (req, res) => {
    const {_id} = req.user;
    const data = await Project.create({...req.body, participants:[_id]});
    res.status(201).json({
        status: "success",
        code: 201,
        data,
    })
};

module.exports = createNewProject;