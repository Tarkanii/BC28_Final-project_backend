const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (token) {
    const user = await User.findOne({ token });
    // console.log(user);
    if (!user) {
      throw new Unauthorized("Unauthorized");
    }
    res.json({
      status: "success",
      code: 200,
      token,
      email: user.email,
      id: user.id
    });
  }
};

module.exports = getCurrent;
    