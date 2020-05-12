const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myNotesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

const db = mongoose.connection;

module.exports = db;
