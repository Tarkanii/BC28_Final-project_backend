const { Sprint } = require("../../models");

const removeById = async (req, res) => {
  const { _id } = req.params;
  const result = await Sprint.findOneandRemove({
    id: _id,
    owner: req.user._id,
  });
  if (!result) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: {
      result,
    },
  });
};

module.exports = removeById;
