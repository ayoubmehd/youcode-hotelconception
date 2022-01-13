const express = require("express");

const router = express.Router()


const User = require('./User');
const Order = require('./Order');
const customer = require("./customer");
const good = require("./good");


router.use("/users", User);
router.use("/orders", Order);
router.use("/customers", customer);
router.use("/goods", good);

module.exports = router

