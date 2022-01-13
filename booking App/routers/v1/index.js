const express = require("express");

const router = express.Router()


const User = require('./User');
const Order = require('./Order');


router.use("/", User);
router.use("/orders", Order);

module.exports = router

