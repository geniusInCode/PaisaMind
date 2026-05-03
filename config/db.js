const mongoose = require('mongoose');

const connectDB = async () => {
  const MONGODB_URI =
    process.env.MONGO_URI ||
    process.env.MONGODB_URI ||
    'mongodb://localhost:27017/paisamind';

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB!');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    console.log('💡 Make sure to set MONGO_URI in your .env file');
    process.exit(1);
  }
};

module.exports = connectDB;
