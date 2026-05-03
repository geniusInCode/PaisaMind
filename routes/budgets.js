const express = require('express');
const Budget = require('../models/Budget');
const auth = require('../middleware/auth');

const router = express.Router();
const DEFAULT_BUDGET = { Food: 5000, Travel: 4000, Shopping: 4000, Entertainment: 2000, Utilities: 2000, Health: 2000 };

// GET /api/budgets
router.get('/', auth, async (req, res) => {
  try {
    let budget = await Budget.findOne({ userId: req.user.id });
    if (!budget) budget = await Budget.create({ userId: req.user.id, categories: DEFAULT_BUDGET });
    res.json(Object.fromEntries(budget.categories));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// PUT /api/budgets
router.put('/', auth, async (req, res) => {
  try {
    const budget = await Budget.findOneAndUpdate(
      { userId: req.user.id },
      { categories: req.body },
      { new: true, upsert: true }
    );
    res.json(Object.fromEntries(budget.categories));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
