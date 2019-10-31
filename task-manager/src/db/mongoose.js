const mongoose = require("mongoose");

const uri =
  "mongodb+srv://petarkolevtaskapp:petarkolevtaskapp@petar-kolev-task-app-xqylp.mongodb.net/task-manager-api";

// The object in connect removes Deprecation Warnings in MongoDB Node.js driver
mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
