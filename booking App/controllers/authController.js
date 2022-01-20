const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require('dotenv').config();

const User = require("../models/User");




module.exports = {


login: async (req, res) => {

  try {
    // Get user input
    const { username, password } = req.body;

    // Validate user input
    if (!(username && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "2h",
        }
      );

      // save user token
    accessToken = token;

    // Remove the password from the selected user
     user.password = '';

      // user
      res.status(200).json({
      status: "success",
      type: "bearer",
      accessToken,
      data: {
        user,
      },
    });
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  
      },

    loggedUser : async (req, res) => {

    }

}