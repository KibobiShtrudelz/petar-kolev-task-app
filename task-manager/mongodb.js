// const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

const databaseName = "task-manager";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(err => {
  if (err) {
    return console.log("Unable to connect to database!");
  }

  console.log("Connected successfully!");
  const db = client.db(databaseName);

  db.collection("users")
    .deleteOne({ age: 30 })
    .then(res => console.log(res))
    .catch(err => console.log(err));

  client.close();
});
