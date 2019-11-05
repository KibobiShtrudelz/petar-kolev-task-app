const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      minlength: 5,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  { timestamps: true }
);

taskSchema.pre("save", async function(next) {
  const task = this;

  if (task.isModified("description")) {
    task.description = task.description + "(edited)";
  }

  next();
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
