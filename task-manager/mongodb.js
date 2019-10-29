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
  // db.collection("users").insertOne(
  //   {
  //     name: "Petar",
  //     age: 30
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log("Unable to insert user!");
  //     }

  //     console.log(result.ops);
  //   }
  // );

  // db.collection("users").insertMany(
  //   [
  //     {
  //       name: "Jen",
  //       age: 18
  //     },
  //     {
  //       name: "Gunter",
  //       age: 42
  //     }
  //   ],
  //   (err, result) => {
  // if (err) {
  //   return console.log("Unable to insert user!");
  // }

  // console.log(result.ops);
  //   }
  // );

  db.collection("tasks").insertMany(
    [
      {
        description: "Task 1",
        completed: true
      },
      {
        description: "Task 2",
        completed: false
      },
      {
        description: "Task 3",
        completed: true
      }
    ],
    (err, result) => {
      if (err) {
        return console.log("Unable to insert tasks!");
      }

      console.log(result.ops);
    }
  );

  client.close();
});
