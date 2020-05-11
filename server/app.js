const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Get Req Successful!");
});

mongoose.connect("mongodb://localhost:27017/myNotesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  notes: String,
});

const User = mongoose.model("User", userSchema);

app.get("/users", (req, res) => {
  User.find((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
      console.log(results);
    }
  });
});

app.listen(5000, (req, res) => {
  console.log("Server started at port 5000 ====>");
});
