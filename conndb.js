
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectdb = async () => {
  try {
    const uri = `mongodb+srv://genishprakash:${process.env.MONGO_PASSWORD}@testcluster.vw17fml.mongodb.net/?retryWrites=true&w=majority&appName=testCluster`;
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectdb;

