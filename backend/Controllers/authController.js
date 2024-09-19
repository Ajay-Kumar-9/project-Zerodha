const bcrypt = require("bcrypt");
const userModel = require("../Model/User");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User is already exist , you can login",
        success: false,
      });
    }

    const newUser = new userModel({ username, email, password });
    newUser.password = await bcrypt.hash(password, 10);
    console.log(newUser);
    await newUser.save();
    res.status(201).json({ message: "Signup successfull", success: true });
  } catch (err) {
    console.log(err); //debug
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

//login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    console.log("user", user);
    const errorMsg = "Auth failed email or password is wrong";
    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    const isPasswordEqual = await bcrypt.compare(password, user.password);
    if (!isPasswordEqual) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    console.log("jwt", jwt);
    res.status(200).json({
      message: "Login success !",
      success: true,
      username: user.username,
      email,
      jwtToken,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = { signup, login };
