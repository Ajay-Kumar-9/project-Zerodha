const bcrypt = require("bcrypt");
const userModel = require("../Model/User");
const jwt = require("jsonwebtoken");


const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({
          message: "User is already exist , you can login",
          success: false,
        });
    }

    const newUser = new userModel({ name, email, password });
    newUser.password = await bcrypt.hash(password, 10);
    console.log(newUser);
    await newUser.save();
    res.status(201).json({ message: "Signup successfull", success: true });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};


// const bcrypt = require("bcrypt");
// const userModel = require("../Model/User");
// const jwt = require("jsonwebtoken");

// const signup = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Validate input
//     if (!name ||  !email ||  !password) {
//       return res.status(400).json({
//         message: "All fields are required.",
//         success: false,
//       });
//     }

//     // Check if the user already exists
//     const user = await userModel.findOne({ email });
//     if (user) {
//       return res.status(409).json({
//         message: "User already exists, you can log in.",
//         success: false,
//       });
//     }

//     // Create a new user
//     const newUser = new userModel({ name, email });
//     newUser.password = await bcrypt.hash(password, 10); // Hash the password

//     console.log(newUser) //debug
//     // Save the new user to the database
//     await newUser.save();

//     res.status(201).json({ message: "Signup successful", success: true });
//   } catch (err) {
//     console.error(err); // Log the error for debugging
//     res.status(500).json({ message: "Internal server error", success: false });
//   }
// };

// module.exports = { signup };

















//login

const login = async (req, res) => {
  try {
    const {email, password } = req.body;
    const user = await userModel.findOne({ email });
    console.log("user",user);
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

    console.log( "jwt" , jwt);
    res.status(200).json({ message: "Login success !", success: true , name:user.name , email , jwtToken});
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = {signup , login};
