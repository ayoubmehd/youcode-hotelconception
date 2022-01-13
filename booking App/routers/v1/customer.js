const express = require("express");
const router = express.Router();

const { getAll, create, update, getById, destroy } = require("../../controllers/customerController");

router.get("/", getAll);
router.post("/", create);
router.put("/:id", update);
router.get("/:id", getById);
router.delete("/:id", destroy);

module.exports = router;