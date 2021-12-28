const { Project } = require("../../models");

const getById = async (req, res) => {
  const { projectId } = req.params;
  const result = await Project.findById(projectId).populate("sprints");
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
