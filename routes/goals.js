const express = require('express');
const Goal = require('../models/Goal');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// GET /api/goals
router.get('/', auth, async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(goals);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// POST /api/goals
router.post('/', auth, async (req, res) => {
  try {
    const goal = await Goal.create({ ...req.body, userId: req.user.id });
    await User.findByIdAndUpdate(req.user.id, { $inc: { xp: 15 } });
    res.status(201).json(goal);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// PUT /api/goals/:id
router.put('/:id', auth, async (req, res) => {
  try {
    const goal = await Goal.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!goal) return res.status(404).json({ error: 'Goal not found' });
    res.json(goal);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// DELETE /api/goals/:id
router.delete('/:id', auth, async (req, res) => {
  try {
    await Goal.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
