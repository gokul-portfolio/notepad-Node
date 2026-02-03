const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    // 1️⃣ Token check
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer ")
    ) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 2️⃣ Extract token
    const token = req.headers.authorization.split(" ")[1];

    // 3️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4️⃣ Fetch user
    const user = await User.findById(decoded.id).select("-password");

    if (!user || !user.isActive) {
      return res.status(401).json({ message: "User not found or inactive" });
    }

    // 5️⃣ Attach user + role + designation
    req.user = user;
    req.userRole = decoded.role;
    req.userDesignation = decoded.designation;

    next();
  } catch (error) {
    console.error("AUTH ERROR:", error);
    return res.status(401).json({ message: "Token failed or expired" });
  }
};

module.exports = protect;
