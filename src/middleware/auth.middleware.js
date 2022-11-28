const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization && authorization.startsWith("Bearer ")) {
    const token = authorization.slice(7);
    try {
      const payload = jwt.verify(token, "key-backend");
      req.userData = payload;
      next();
    } catch (err) {
      console.log(err);
      return res.status(401).json({
        succes: false,
        message: err.message,
      });
    }
  } else {
    return res.status(401).json({
      succes: false,
      message: "Unauthorized",
    });
  }
};

module.exports = authMiddleware;
