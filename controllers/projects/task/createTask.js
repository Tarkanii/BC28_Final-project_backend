const { Task } = require("../../../models/task")
const { Sprint } = require("../../../models/sprint")

const createTask = async (req, res) => {
    const {name,scheduledHours,owner} = req.body;
    const value = {name, scheduledHours,owner};
    const data = await Task.create(value);
    const taskId = data.id
    await Sprint.findByIdAndUpdate({_id:req.body.sprintId},{"$push":{ "tasks" : taskId }})

    res.status(201).json({
        status: "success",
        code: 201,
        data,
    })
};

module.exports = createTask;