
// const bcrypt = require("bcryptjs");
// const user = require("../models/User");

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

        const user = new User(req.body);

        await user.save();

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



