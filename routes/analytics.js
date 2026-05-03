const express = require('express');
const Transaction = require('../models/Transaction');
const auth = require('../middleware/auth');

const router = express.Router();

// GET /api/analytics/summary
router.get('/summary', auth, async (req, res) => {
  try {
    const txs = await Transaction.find({ userId: req.user.id });

    const income  = txs.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const expense = txs.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);

    const byCategory = {};
    txs.filter(t => t.type === 'expense').forEach(t => {
      byCategory[t.category] = (byCategory[t.category] || 0) + t.amount;
    });

    res.json({
      income,
      expense,
      balance: income - expense,
      byCategory,
      totalTransactions: txs.length,
    });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
