const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  userId:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  categories: { type: Map, of: Number, default: {} },
}, { timestamps: true });

module.exports = mongoose.model('Budget', BudgetSchema);
