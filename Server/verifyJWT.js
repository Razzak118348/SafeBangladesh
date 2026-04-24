const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  // Use optional chaining to prevent crashes if cookies are missing
  const token = req.cookies?.access_token;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      // If token is expired or invalid, 403 is correct
      return res.status(403).send({ message: "Forbidden: Invalid or expired token" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyJWT;