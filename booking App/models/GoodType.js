const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model("GoodType", schema);
