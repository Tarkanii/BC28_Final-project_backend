const validation = (schema) => {
  return (req, res, next) => {
    console.log(req.body);
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: error.message,
      });
      return;
    }
    next();
  };
};

module.exports = validation;
