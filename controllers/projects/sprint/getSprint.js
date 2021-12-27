const {NotFound} = require("http-errors");
const { Sprint } = require("../../../models/sprint")

const getSprint = async(req, res)=> {
    const {id} = req.params;
    const data = await Sprint.findById(id).populate("tasks");
    if(!data){
        throw new NotFound(`Sprint with id=${id} not found`)
    }
    res.json({
        status: "success",
        code: 200,
        data,
    })
}

module.exports = getSprint;