// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tasks' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Projects', projectSchema);
