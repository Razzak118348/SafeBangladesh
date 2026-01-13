const adminEmails = [
  "abdurrazzak118348@gmail.com",
  "jahinkabir2024@gmail.com",
  "info@nirapodbangladesh.org",
];

const verifyAdmin = (req, res, next) => {
  const userEmail = req.user?.email; // req.user comes from verifyJWT

  if (!userEmail || !adminEmails.includes(userEmail)) {
    return res.status(403).send({ message: "Admin only access" });
  }

  next();
};

module.exports = verifyAdmin;
