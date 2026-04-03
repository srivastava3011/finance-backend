const checkRole = (roles) => {
  return (req, res, next) => {
    const role = req.headers.role;

    if (!role || !roles.includes(role)) {
      return res.status(403).json({ message: "Access Denied" });
    }

    next();
  };
};

module.exports = checkRole;