const express = require("express");

const router = express.Router()


const User = require('./User');
const Order = require('./Order');
const Customer = require('./Customer');


router.use("/", User);
router.use("/orders", Order);
router.use("/customers", Customer);

module.exports = router

