const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://petarkolevtaskapp:petarkolevtaskapp@petar-kolev-task-app-xqylp.mongodb.net/task-manager?retryWrites=true&w=majority";

const databaseName = "task-manager";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(err => {
  if (err) {
    return console.log("Unable to connect to database!");
  }

  console.log("Connected correctly!");

  const db = client.db(databaseName);
  const collection = db.collection("users").insertOne({
    name: "Petar",
    age: 30
  });

  client.close();
});
