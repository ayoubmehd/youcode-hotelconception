const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    childs: [
        { age: Number }
    ]
});

module.exports = mongoose.model("Customer", customerSchema);

