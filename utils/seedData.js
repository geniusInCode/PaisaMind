const Transaction = require('../models/Transaction');
const Goal = require('../models/Goal');
const Budget = require('../models/Budget');
const Subscription = require('../models/Subscription');

async function seedUserData(userId) {
  // Seed transactions
  const txs = [
    { type: 'income',  amount: 85000, category: 'Salary',       date: '2025-03-01', desc: 'March salary',            note: '' },
    { type: 'expense', amount: 18000, category: 'Rent',          date: '2025-03-02', desc: 'Monthly rent',            note: '' },
    { type: 'expense', amount: 4200,  category: 'Food',          date: '2025-03-05', desc: 'Groceries + dining',      note: '' },
    { type: 'expense', amount: 3500,  category: 'Travel',        date: '2025-03-08', desc: 'Cab & metro',             note: '' },
    { type: 'income',  amount: 12000, category: 'Freelance',     date: '2025-03-10', desc: 'UI project payment',      note: '' },
    { type: 'expense', amount: 1500,  category: 'Entertainment', date: '2025-03-12', desc: 'Netflix, Spotify',        note: '' },
    { type: 'expense', amount: 2800,  category: 'Shopping',      date: '2025-03-15', desc: 'Clothes & accessories',   note: '' },
    { type: 'expense', amount: 900,   category: 'Health',        date: '2025-03-18', desc: 'Pharmacy & consultation', note: '' },
    { type: 'income',  amount: 5000,  category: 'Investment',    date: '2025-03-20', desc: 'Dividend received',       note: '' },
    { type: 'expense', amount: 1200,  category: 'Utilities',     date: '2025-03-22', desc: 'Electricity & internet',  note: '' },
    { type: 'income',  amount: 85000, category: 'Salary',        date: '2025-02-01', desc: 'Feb salary',              note: '' },
    { type: 'expense', amount: 18000, category: 'Rent',          date: '2025-02-02', desc: 'Rent Feb',                note: '' },
    { type: 'expense', amount: 6500,  category: 'Shopping',      date: '2025-02-14', desc: 'Valentine gifts',         note: '' },
    { type: 'expense', amount: 2200,  category: 'Education',     date: '2025-03-25', desc: 'Udemy courses',           note: '' },
    { type: 'income',  amount: 85000, category: 'Salary',        date: '2025-01-01', desc: 'Jan salary',              note: '' },
    { type: 'income',  amount: 90000, category: 'Salary',        date: '2024-12-01', desc: 'Dec salary (bonus)',      note: '' },
    { type: 'income',  amount: 82000, category: 'Salary',        date: '2024-11-01', desc: 'Nov salary',              note: '' },
  ];
  await Transaction.insertMany(txs.map(t => ({ ...t, userId })));

  // Seed goals
  await Goal.insertMany([
    { userId, name: 'New iPhone 16',  target: 90000,  saved: 32000, emoji: '📱', deadline: '2025-08-01' },
    { userId, name: 'Goa Trip',       target: 25000,  saved: 18000, emoji: '🏖️', deadline: '2025-06-01' },
    { userId, name: 'Emergency Fund', target: 200000, saved: 85000, emoji: '🛡️', deadline: '2025-12-31' },
  ]);

  // Seed budget
  await Budget.create({
    userId,
    categories: { Food: 5000, Travel: 4000, Shopping: 4000, Entertainment: 2000, Utilities: 2000, Health: 2000 },
  });

  // Seed subscriptions
  await Subscription.insertMany([
    { userId, name: 'Netflix',       amount: 649,  icon: '🎬', renews: '2025-04-10', color: '#ef4444' },
    { userId, name: 'Spotify',       amount: 199,  icon: '🎵', renews: '2025-04-15', color: '#22c55e' },
    { userId, name: 'Amazon Prime',  amount: 1499, icon: '📦', renews: '2025-05-01', color: '#f97316' },
    { userId, name: 'GitHub Pro',    amount: 840,  icon: '💻', renews: '2025-04-20', color: '#8b5cf6' },
  ]);
}

module.exports = seedUserData;
