const { Project } = require("../../../models");
const { Sprint } = require("../../../models/sprint")

const createSprint = async (req, res) => {
    const {name,startDate,endDate,sprintDuration}  = req.body;
    const value = {name,startDate,endDate,sprintDuration};
    const data = await Sprint.create(value);
    const sprindId = data.id
    await Project.findByIdAndUpdate({_id:req.body.projectId},{"$push":{ "sprints" : sprindId }})
    res.status(201).json({
        status: "success",
        code: 201,
        data,
    })
};

module.exports = createSprint;