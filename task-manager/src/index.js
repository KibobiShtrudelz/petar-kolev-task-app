const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}. Node process pid ${process.pid}`
  );
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("5dc0214311d270722897bafb");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  const user = await User.findById("5dc11fa54029fd217f88d1d7");
  await user.populate("tasks").execPopulate();
};

main();
