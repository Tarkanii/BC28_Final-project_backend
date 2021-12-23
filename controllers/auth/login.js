const { Unauthorized } = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const { SECRET_KEY: key } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new Unauthorized(`Email or password is wrong`);
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, key);

  await User.findByIdAndUpdate(payload.id, { token });

  res.json({
    status: "success",
    code: 200,
    token,
    user: {email,
    },
  });
};
module.exports = login;
