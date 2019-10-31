const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

taskSchema.pre("save", async function(next) {
  const task = this;

  if (task.isModified("description")) {
    task.description = task.description + "(edited)";
  }

  next();
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
