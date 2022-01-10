const express = require("express");
const router = express.Router()

const User = require('../../controllers/userController')


router.post("/login", User.Login );
router.post("/register", User.Register );






module.exports = router