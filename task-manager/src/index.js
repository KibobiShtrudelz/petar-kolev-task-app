const express = require("express");

require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const bcrypt = require("bcryptjs");

const myFunc = async () => {
  const pwd = "Red12345!";
  const hashedPwd = await bcrypt.hash(pwd, 8);

  console.log("pwd", pwd);
  console.log("hashedPwd", hashedPwd);

  const isMatch = await bcrypt.compare(pwd, hashedPwd);
  console.log("isMatch", isMatch);
};

myFunc();
