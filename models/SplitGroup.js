const mongoose = require('mongoose');

const SplitGroupSchema = new mongoose.Schema({
  userId:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:     { type: String, required: true },
  total:    { type: Number, required: true },
  members:  [String],
  settled:  [Boolean],
}, { timestamps: true });

module.exports = mongoose.model('SplitGroup', SplitGroupSchema);
