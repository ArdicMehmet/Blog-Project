const errorWrapper = (callback) => {
  return (req, res, next) => {
    try {
      callback(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = errorWrapper;
