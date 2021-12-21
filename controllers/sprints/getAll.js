const { Sprint } = require("../../models");

const getAll = async (req, res) => {
  const user = req.user;
  const result = await Sprint.find({ owner: user._id });
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAll;
