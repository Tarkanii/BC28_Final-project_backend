const { Conflict } = require("http-errors");
const { User } = require("../../models");
const gravatar = require("gravatar");
const { v4 } = require("uuid");
const { sendEmail } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({ email });
  if (result) {
    throw new Conflict("Email in use");
  }

  const avatarURL = gravatar.url(email);
  const verifyToken = v4();
  const newUser = new User({ email, avatarURL, verifyToken });
  newUser.setPassword(password);

  await newUser.save();

  const mail = {
    to: email,
    subject: "Подтверждение регистрации на сайте",
    html: `
      <a href="http://localhost:3000/api/users/verify/:verificationToken"${verifyToken}>Нажмите для подтверждения</a>
    `,
  };
  await sendEmail(mail);

  res.status(201).json({
    code: 201,
    status: "success",
    message: "Register success",
    user: {
      email,
      avatarURL,
      subscription: "starter",
    },
  });
};

module.exports = register;
