const {NotFound} = require("http-errors");
const { Sprint } = require("../../../models/sprint")

const updateSprint = async(req, res)=> {
    const {id} = req.params;
    const data = await Sprint.findByIdAndUpdate(id, req.body, { new:true });
    if(!data){
        throw new NotFound(`Sprint with id=${id} not found`)
    }
    res.json({
        status: "success",
        code: 200,
        data,
    })
}

module.exports = updateSprint;