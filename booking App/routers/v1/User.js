const express = require("express");
const router = express.Router();

const {getAll, getById, create, update, destroy} = require('../../controllers/userController');

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id",destroy);

module.exports = router