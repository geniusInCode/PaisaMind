const express = require('express');
const Subscription = require('../models/Subscription');
const auth = require('../middleware/auth');

const router = express.Router();

// GET /api/subscriptions
router.get('/', auth, async (req, res) => {
  try {
    const subs = await Subscription.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(subs);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// POST /api/subscriptions
router.post('/', auth, async (req, res) => {
  try {
    const sub = await Subscription.create({ ...req.body, userId: req.user.id });
    res.status(201).json(sub);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// DELETE /api/subscriptions/:id
router.delete('/:id', auth, async (req, res) => {
  try {
    await Subscription.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
