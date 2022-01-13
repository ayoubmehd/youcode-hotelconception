const express = require("express");

const router = express.Router()


const User = require('./User');
const customer = require("./customer");


router.use("/", User);



router.use("/customers", customer);

module.exports = router

