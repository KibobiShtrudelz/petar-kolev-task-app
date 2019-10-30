const mongoose = require("mongoose");

const uri =
  "mongodb+srv://petarkolevtaskapp:petarkolevtaskapp@petar-kolev-task-app-xqylp.mongodb.net/task-manager-api";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
