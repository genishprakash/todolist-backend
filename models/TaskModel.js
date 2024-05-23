// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  duedate:{type:Date}
});
module.exports = mongoose.model('Task', taskSchema);
