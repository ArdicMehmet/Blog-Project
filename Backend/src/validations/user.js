const validateBody = (schema) => {
  return (req, res, next) => {
    try {
      const { error } = schema.validate(req.body);

      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      next();
    } catch (e) {
      next(e);
    }
  };
};

module.exports = { validateBody };
