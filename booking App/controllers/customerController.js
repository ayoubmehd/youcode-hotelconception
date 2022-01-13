const Customer = require("../models/Customer");

module.exports = {
    getAll(req, res) {

    },
    async create(req, res) {

        const customer = new Customer(req.body);

        await customer.save();

        res.status(201).json({
            message: "Customer created successfully",
            data: customer,
        });
    },
    update(req, res) {

    },
    getById : async (req, res) => {


        const {id } = req.params;

         const customer =  await Customer.findById(id).exec();

        return res.status(200).send(customer)


    },
    destroy(req, res) {

    }
}