const express = require("express");
const router = express.Router()

const { getAll, getById, create, update, destroy, restore } = require('../../controllers/orderController')


router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);
router.put("/:id/restore", restore);



module.exports = router