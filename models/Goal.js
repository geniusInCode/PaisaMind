const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  userId:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:     { type: String, required: true, trim: true },
  target:   { type: Number, required: true, min: 0 },
  saved:    { type: Number, default: 0 },
  emoji:    { type: String, default: '🎯' },
  deadline: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Goal', GoalSchema);
