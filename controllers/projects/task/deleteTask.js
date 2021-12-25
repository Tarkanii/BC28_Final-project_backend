const {NotFound} = require("http-errors");
const { Task } = require("../../../models/task")

const deleteTask = async(req, res)=> {
    const {id} = req.params;
    const data = await Task.findByIdAndRemove(id);
    if(!data){
        throw new NotFound(`Task with id=${id} not found`)
    }
    res.json({
        status: "success",
        code: 200,
        data,
    })
}

module.exports = deleteTask;