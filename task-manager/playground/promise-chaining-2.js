require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5db99d1ab9e1e842ee75bcc0")
//   .then(res => {
//     console.log(res);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(uncompletedTasks => {
//     console.log(uncompletedTasks);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const deleteTaskAndCount = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });

  return count;
};

deleteTaskAndCount("5db99d58a83943434515671a", false)
  .then(res => console.log(res))
  .catch(err => console.log(err));
