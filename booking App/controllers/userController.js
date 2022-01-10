
const bcrypt = require("bcryptjs");

const User = require("../models/User");


module.exports={

      
      Register :  async (req, res) => {
        const {  email, password } = req.body;
      
        let user = await User.findOne({ email });
      
        if (user) {
            return res.status(401).send({
                message: "user already exist"
            })
        }
      
        const hasdPsw = await bcrypt.hash(password, 12);
      
        user = new User({
          email,
          password: hasdPsw,
        });
      
        await user.save();

        return res.status(201).send({
            message: "user Created"
        })
      },

    

    login : async (req, res) => {
        const { email, password } = req.body;
      
        const user = await User.findOne({ email });
      
        if (!user) {
            res.status(401).send({
                message: "user already exist"
            })
        }
      
        const isMatch = await bcrypt.compare(password, user.password);
      
        if (!isMatch) {
                  return res.status(401).send({
            message: "Invalid Credentials"
        })
        }
        return res.status(200).send({
          message: "login successful"
      })
      
   
      }


}