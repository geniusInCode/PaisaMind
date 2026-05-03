const express = require('express');
const Transaction = require('../models/Transaction');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// GET /api/transactions
router.get('/', auth, async (req, res) => {
  try {
    const { type, category, month, search } = req.query;
    const filter = { userId: req.user.id };

    if (type && type !== 'all') filter.type = type;
    if (category && category !== 'all') filter.category = category;
    if (month) filter.date = { $regex: `^${month}` };
    if (search) filter.$or = [
      { desc: { $regex: search, $options: 'i' } },
      { category: { $regex: search, $options: 'i' } },
    ];

    const txs = await Transaction.find(filter).sort({ date: -1, createdAt: -1 });
    res.json(txs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/transactions
router.post('/', auth, async (req, res) => {
  try {
    const { type, amount, category, date, desc, note } = req.body;
    if (!type || !amount || !category || !date || !desc)
      return res.status(400).json({ error: 'Missing required fields' });

    const tx = await Transaction.create({
      userId: req.user.id, type, amount, category, date, desc, note: note || '',
    });

    await User.findByIdAndUpdate(req.user.id, { $inc: { xp: 10 } });
    res.status(201).json(tx);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/transactions/:id
router.put('/:id', auth, async (req, res) => {
  try {
    const tx = await Transaction.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!tx) return res.status(404).json({ error: 'Transaction not found' });
    res.json(tx);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/transactions/:id
router.delete('/:id', auth, async (req, res) => {
  try {
    const tx = await Transaction.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!tx) return res.status(404).json({ error: 'Transaction not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
