const express = require("express");
const mongoose = require("mongoose");

require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch(err => res.status(400).send(err));
});

app.get("/users", (eq, res) => {
  User.find({})
    .then(users => {
      res.status(200).send(users);
    })
    .catch(() => res.status(500).send());
});

app.get("/users/:id", (req, res) => {
  const _id = req.params.id;

  User.findById(_id)
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }

      return res.status(200).send(user);
    })
    .catch(() => res.status(500).send());
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then(tasks => {
      res.status(200).send(tasks);
    })
    .catch(() => res.status(500).send());
});

app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;

  Task.findById({ _id })
    .then(task => {
      if (!task) {
        return res.status(404).send();
      }
      res.status(200).send(task);
    })
    .catch(err => res.status(404).send(err));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
