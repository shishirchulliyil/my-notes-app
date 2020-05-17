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

addUser = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username }, (err, foundUser) => {
    if (!err) {
      if (!foundUser) {
        const newUser = new User({
          username: username,
          password: password,
          notes: "",
        });
        newUser
          .save()
          .then(() => {
            return res.status(201).json({
              success: true,
              id: newUser._id,
              message: "User Registered!",
            });
          })
          .catch((err) => {
            return res.status(400).json({
              err,
              message: "User not registered!",
            });
          });
      } else {
        res.send("User Already Exists!");
      }
    } else {
      console.log("User Fetch Error: " + err);
      res.send("User Fetch Error");
    }
  });
};

authUser = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username }, (err, foundUser) => {
    if (!err) {
      if (foundUser) {
        if (foundUser.password === password) {
          return res.status(200).json({
            success: true,
            message: "user authenticated",
          });
        } else {
          return res.status(200).json({
            success: false,
            message: "Incorrect password!",
          });
        }
      } else {
        return res.status(200).json({
          success: false,
          message: "user doesn't exists!",
        });
      }
    } else {
      return res.status(200).json({
        success: false,
        message: "user doesn't exists!",
      });
    }
  });
};

module.exports = { getUsers, addUser, authUser };
