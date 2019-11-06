const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const multer = require("multer");
const upload = multer({
  dest: "avatars",
  limits: { fileSize: 1000000 },
  fileFilter(req, file, cb) {
    // if (!file.originalname.endsWith(".pdf")) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(
        new Error("Please upload an image with .jpg, .jpeg or .png extension.")
      );
    }

    cb(undefined, true);
  }
});

app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send();
  },
  (err, req, res, next) => {
    res.status(400).send({ err: err.message });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ; pid ${process.pid}`);
});
