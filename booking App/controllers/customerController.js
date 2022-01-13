const Customer = require("../models/Customer");

module.exports = {
    async getAll(req, res) {
        const page = req.query.page ?? req.query.page <= 0 ? req.query.page : 1;
        const perpage = 10;

        const customers = await Customer.find().skip((page - 1) * perpage).limit(perpage);
        res.json({
            data: customers,
            prevPage: page > 1 ? page - 1 : null,
            currentPage: +page,
            nextPage: page < customers.length - 1 ? +page + 1 : null
        });

    },
    async create(req, res) {

        const customer = new Customer(req.body);

        await customer.save();

        res.status(201).json({
            message: "Customer created successfully",
            data: customer,
        });
    },
    async update(req, res) {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body);

        if (!customer) {
            return res.status(404).json({
                message: "Customer not found",
            });
        }

        res.json({
            message: "Customer updated successfully",
            data: customer
        });
    },
    async getById(req, res) {
        const customer = await Customer.findById(req.params.id);

        if (!customer) {
            return res.status(404).json({
                message: "Customer Not Found",
            });
        }

        res.json(customer);
    },
    async destroy(req, res) {

        const customer = await Customer.findByIdAndDelete(req.params.id);

        if (!customer) {
            res.status(404).json({
                message: "Customer Not Found",
            });
        }

        res.status(202).json({
            message: "Customer deleted sccessfully",
            data: customer
        });
    }
}