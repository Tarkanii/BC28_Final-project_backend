const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");

const { User } = require("../models");

const { SECRET_KEY: key } = process.env;

const authorized = async (req, res, next) => {
  const { authorization } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") throw new Unauthorized("Not authorized");
  try {
    const { id } = jwt.verify(token, key);
    const user = await User.findById(id);
    if (!user || !user.token) {
      throw new Unauthorized("Not authorized");
    }
    req.user = user;
    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
};
module.exports = authorized;
