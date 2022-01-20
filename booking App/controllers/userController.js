
const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports={ 


    getAll : async (req, res) => {
        const page = req.query.page ?? req.query.page <= 0 ? req.query.page : 1;
        const perpage = 10;

        const users = await User.find().skip((page - 1) * perpage).limit(perpage);
        res.json({
            data: users,
            prevPage: page > 1 ? page - 1 : null,
            currentPage: +page,
            nextPage: page < users.length - 1 ? +page + 1 : null
        });

    },
      

   getById :  async (req, res) => {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: "user Not Found",
            });
        }

        res.json(user);
    },


    create : async(req, res) => {

        const {username, password} = req.body;


    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ username });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }


    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 12);

      // Create user in our database
      const user = await User.create({
        username: username.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });


        res.status(201).json({
            message: "user created successfully",
            data: user,
        });
    },


    update :  async(req, res) => {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);

        if (!user) {
            return res.status(404).json({
                message: "user not found",
            });
        }

        res.json({
            message: "user updated successfully",
            data: customer
        });
    }, 


    destroy : async (req, res) => {

        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            res.status(404).json({
                message: "user Not Found",
            });
        }

        res.status(202).json({
            message: "user deleted sccessfully",
            data: user
        });
    },    

}



