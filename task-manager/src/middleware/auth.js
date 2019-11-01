const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", ""); // here we extract the token from the Headers
    const decoded = jwt.verify(token, "mySuperSecretString");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token
    });

    if (!user) {
      throw new Error();
    }

    req.user = user; // here we attach the user object to the req which we can reach in the route
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
