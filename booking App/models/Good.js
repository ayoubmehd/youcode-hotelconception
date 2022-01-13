const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    goodType: {
        type: mongoose.Types.ObjectId,
        ref: 'GoodType',
        required: true,
    },
});

module.exports = mongoose.model("Good", schema);
