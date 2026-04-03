const express = require("express");
const router = express.Router();

const {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  getSummary
} = require("../controllers/transactionController");

const checkRole = require("../middleware/authMiddleware");

router.post("/", checkRole(["admin"]), createTransaction);
router.get("/", getTransactions);
router.put("/:id", checkRole(["admin"]), updateTransaction);
router.delete("/:id", checkRole(["admin"]), deleteTransaction);
router.get("/summary", getSummary);

module.exports = router;