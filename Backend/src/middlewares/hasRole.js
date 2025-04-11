const hasRole = (role) => {
  return (req, res, next) => {
    try {
      const user = req.user;
      if (!user || !user.role.includes(role)) {
        return res.status(403).json({ message: "Access denied" });
      }
      next();
    } catch (e) {
      next(e);
    }
  };
};
module.exports = hasRole;
