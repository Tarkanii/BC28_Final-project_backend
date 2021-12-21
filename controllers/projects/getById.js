const { Project } = require("../../models");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Project.findById(id).populate("sprints");
  if (!result) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getById;
