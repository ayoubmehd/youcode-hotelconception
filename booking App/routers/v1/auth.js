const express = require("express");
const router = express.Router()

const {login, loggedUser } = require('../../controllers/authController')


router.post("/login", login);
router.get("/user", loggedUser);



module.exports = router