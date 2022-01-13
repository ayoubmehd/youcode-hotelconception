const Good = require("../models/Good");
const GoodType = require("../models/GoodType");
const paginate = require("../helpers/paginate");

module.exports = {
    async getAll(req, res) {

        res.json(await paginate(Good, req.query.page));

    },
    async create(req, res) {

        const goodType = await GoodType.findOne({ label: req.body.goodType });

        delete req.body.goodType;

        const good = new Good({
            ...req.body,
            goodType
        });

        await good.save();

        res.status(201).json({
            message: "Good created successfully",
            data: good,
        });
    },
    async update(req, res) {
        try {
            const goodType = await GoodType.findOne({ label: req.body.goodType });

            delete req.body.goodType;

            const good = await Good.findByIdAndUpdate(req.params.id, {
                ...req.body,
                goodType
            });

            if (!good) {
                return res.status(404).json({
                    message: "Good not found",
                });
            }

            res.status(201).json({
                message: "Good updated successfully",
                data: good,
            });
        } catch (error) {
            console.log(error);
            res.status(500).end();
        }
    },
    async getById(req, res) {
        const good = await Good.findById(req.params.id);

        if (!good) {
            return res.status(404).json({
                message: "Good Not Found",
            });
        }

        res.json(good);
    },
    async destroy(req, res) {

        const good = await Good.findByIdAndDelete(req.params.id);

        if (!good) {
            res.status(404).json({
                message: "Good Not Found",
            });
        }

        res.status(202).json({
            message: "Good deleted sccessfully",
            data: good
        });
    }
}