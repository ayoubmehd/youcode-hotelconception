const express = require("express");
const router = express.Router()

const {getAll, getById, Create, Update, Destroy} = require('../../controllers/orderController')


router.get("/", getAll);
router.get("/:id", getById);
router.post("/", Create);
router.put("/:id", Update);
router.delete("/:id", Destroy);



module.exports = router