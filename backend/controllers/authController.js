const User = require("../models/User");
const jwt = require("jsonwebtoken");

/* =====================
   SIGNUP / REGISTER
===================== */
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, designation } = req.body;

    // 1️⃣ Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
        code: "MISSING_FIELDS",
      });
    }

    // 2️⃣ Email exists check
    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
        code: "USER_EXISTS",
      });
    }

    // 3️⃣ Create user
    await User.create({
      name,
      email: email.toLowerCase(),
      password,
      designation, // optional – schema default applies
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful",
    });

  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

/* =====================
   LOGIN
===================== */
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
        code: "MISSING_FIELDS",
      });
    }

    // 2️⃣ Fetch user
    const user = await User.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
        code: "INVALID_CREDENTIALS",
      });
    }

    // 3️⃣ Password check
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
        code: "INVALID_CREDENTIALS",
      });
    }

    // 4️⃣ JWT Secret check
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        success: false,
        message: "Server configuration error",
      });
    }

    // 5️⃣ Token generation
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        designation: user.designation,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 6️⃣ Update last login
    user.lastLogin = new Date();
    await user.save({ validateBeforeSave: false });

    // 7️⃣ Response
    return res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        designation: user.designation,
      },
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
