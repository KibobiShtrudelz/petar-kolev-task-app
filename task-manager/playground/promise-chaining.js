require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5db9782f35870312a045e97b", { age: 1 })
//   .then(user => {
//     console.log("Found and updated user:", user);
//     return User.countDocuments({ age: 0 });
//   })
//   .then(countResult => {
//     console.log("Document count:", countResult);
//   })
//   .catch(err => console.log(err));

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount("5db9782f35870312a045e97b", 2)
  .then(count => console.log(count))
  .catch(err => console.log(err));
