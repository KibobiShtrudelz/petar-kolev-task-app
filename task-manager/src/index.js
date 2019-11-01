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

const jwt = require("jsonwebtoken");

const myTestFunc = async () => {
  const token = jwt.sign({ _id: "abc123" }, "mySuperSecretString", {
    expiresIn: "7 days"
  });
  console.log("token:", token);

  const data = jwt.verify(token, "mySuperSecretString");
  console.log("data:", data);
};

myTestFunc();
