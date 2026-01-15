const adminEmails = process.env.ADMIN_EMAILS
  .split(",")
  .map(e => e.trim());

const verifyAdmin = (req, res, next) => {
  // Skip OPTIONS preflight
  if (req.method === "OPTIONS") return next();

  const userEmail = req.user?.email; // req.user comes from verifyJWT
  if (!userEmail || !adminEmails.includes(userEmail)) {
    return res.status(403).send({ message: "Admin only access" });
  }
  next();
};

module.exports = verifyAdmin;
