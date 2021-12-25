const { Task } = require("../../../models/task")

const createTask = async (req, res) => {
    const data = await Task.create(req.body);
    res.status(201).json({
        status: "success",
        code: 201,
        data,
    })
};

module.exports = createTask;