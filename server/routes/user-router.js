const express = require("express");
const UserController = require("../controllers/user-controller");

const router = express.Router();

router.get("/getUsers", UserController.getUsers);
router.post("/addUser", UserController.addUser);
router.post("/authUser", UserController.authUser);

module.exports = router;
