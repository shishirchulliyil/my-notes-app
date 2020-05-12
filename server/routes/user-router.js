const express = require("express");
const UserController = require("../controllers/user-controller");

const router = express.Router();

router.get("/getUsers", UserController.getUsers);

module.exports = router;
