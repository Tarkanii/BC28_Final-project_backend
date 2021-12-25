const {NotFound} = require("http-errors");
const { Task } = require("../../../models/task")

const updateTask = async(req, res)=> {
    const {id} = req.params;
    const data = await Task.findByIdAndUpdate(id, req.body, { new:true });
    if(!data){
        throw new NotFound(`Task with id=${id} not found`)
    }
    res.json({
        status: "success",
        code: 200,
        data,
    })
}

module.exports = updateTask;