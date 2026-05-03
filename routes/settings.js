const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// PUT /api/settings
router.put('/', auth, async (req, res) => {
  try {
    const { currency, xp, level, healthScore } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        ...(currency && { currency }),
        ...(xp !== undefined && { xp }),
        ...(level && { level }),
        ...(healthScore && { healthScore }),
      },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
