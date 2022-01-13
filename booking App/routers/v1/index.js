const express = require("express");

const router = express.Router()


const User = require('./User');
const Order = require('./Order');
const customer = require("./customer");


router.use("/", User);
router.use("/orders", Order);
router.use("/customers", customer);

module.exports = router

