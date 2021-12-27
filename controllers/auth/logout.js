const { Unauthorized } = require("http-errors");
const { User } = require("../../models");

const logout = async (req, res) => {
  const user = req.user;
  if (!user) {
    throw new Unauthorized("Not authorized");
  }

  await User.findByIdAndUpdate(user._id, { token: null });

  res.status(204).json();
};

module.exports = logout;
