const { Conflict } = require("http-errors");
const { User } = require("../../models");
const { v4 } = require("uuid");

const register = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({ email });
  if (result) {
    throw new Conflict("Email in use");
  }
  // const verifyToken = v4();
  const newUser = new User({ email });
  newUser.setPassword(password);

  await newUser.save();

  res.status(201).json({
    code: 201,
    status: "success",
    message: "Register success",
    user: {
      email,
    },
  });
};

module.exports = register;
