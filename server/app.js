const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const db = require("./db-connection");
const userRouter = require("./routes/user-router");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.set("view engine", "ejs");

//check for db connection errors
db.on("error", (err) => {
  console.log("MongoDB Connection Error => " + err);
});

//Test Connection
app.get("/info", (req, res) => {
  console.log(req);
  res.send("Backend Server connection successful!");
});

app.use("/api", userRouter);

app.listen(5000, (req, res) => {
  console.log("Server started at port 5000 ====>");
});
