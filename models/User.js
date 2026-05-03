const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name:        { type: String, required: true, trim: true },
  email:       { type: String, required: true, unique: true, lowercase: true, trim: true },
  password:    { type: String, required: true },
  currency:    { type: String, default: 'INR' },
  xp:          { type: Number, default: 0 },
  level:       { type: Number, default: 1 },
  healthScore: { type: Number, default: 72 },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
