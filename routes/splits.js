const express = require('express');
const SplitGroup = require('../models/SplitGroup');
const auth = require('../middleware/auth');

const router = express.Router();

// GET /api/splits
router.get('/', auth, async (req, res) => {
  try {
    const splits = await SplitGroup.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(splits);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// POST /api/splits
router.post('/', auth, async (req, res) => {
  try {
    const split = await SplitGroup.create({ ...req.body, userId: req.user.id });
    res.status(201).json(split);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// PUT /api/splits/:id
router.put('/:id', auth, async (req, res) => {
  try {
    const split = await SplitGroup.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    res.json(split);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
