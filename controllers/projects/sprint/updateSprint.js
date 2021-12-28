const {NotFound} = require("http-errors");
const { Sprint } = require("../../../models/sprint")

const updateSprint = async(req, res)=> {
    const {sprintId} = req.params;
    const data = await Sprint.findByIdAndUpdate({_id:sprintId}, req.body, { new:true });
    if(!data){
        throw new NotFound(`Sprint with id=${sprintId} not found`)
    }
    res.json({
        status: "success",
        code: 200,
        data,
    })
}

module.exports = updateSprint;