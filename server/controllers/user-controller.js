const User = require("../models/user-model");

getUsers = (req, res) => {
  User.find((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
};

module.exports = { getUsers };
