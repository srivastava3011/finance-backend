const Transaction = require("../models/Transaction");

// Create
exports.createTransaction = async (req, res) => {
  try {
    const tx = await Transaction.create(req.body);
    res.json(tx);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all
exports.getTransactions = async (req, res) => {
  try {
    const data = await Transaction.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateTransaction = async (req, res) => {
  try {
    const updated = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete
exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Summary API
exports.getSummary = async (req, res) => {
  try {
    const data = await Transaction.find();

    let income = 0;
    let expense = 0;

    data.forEach((tx) => {
      if (tx.type === "income") income += tx.amount;
      else expense += tx.amount;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      balance: income - expense
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};