const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  // 1. Allow pre-flight OPTIONS requests to skip token check
  if (req.method === "OPTIONS") {
    return next();
  }

  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Forbidden" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyJWT;