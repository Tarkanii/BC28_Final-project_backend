const { Sprint } = require("../../../models/sprint")

const createSprint = async (req, res) => {
    const data = await Sprint.create(req.body);
    res.status(201).json({
        status: "success",
        code: 201,
        data,
    })
};

module.exports = createSprint;