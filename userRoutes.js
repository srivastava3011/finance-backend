const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// ✅ CREATE USER
router.post("/", userController.createUser);

// ✅ GET USERS
router.get("/", userController.getUsers);

module.exports = router;