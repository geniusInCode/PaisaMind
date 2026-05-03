const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name:   { type: String, required: true, trim: true },
  amount: { type: Number, required: true, min: 0 },
  icon:   { type: String, default: '📱' },
  renews: { type: String, required: true },
  color:  { type: String, default: '#7c6fff' },
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);
