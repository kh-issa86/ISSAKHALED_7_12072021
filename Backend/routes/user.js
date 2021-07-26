const express = require("express");
const router = express.Router(); //using the router function
const authUser = require("../middleware/authUser");
const auth = require("../middleware/auth"); // auth middleware
const multer = require("../middleware/multer-config"); //multer

const userCtrl = require("../controllers/user"); //path to the right controller

// difine user routes
router.post("/signup", authUser.checkPseudo, authUser.valid, userCtrl.signup);
router.post("/login", authUser.valid, userCtrl.login);
router.get("/accounts", auth, userCtrl.getAllUsers);
router.put("/accounts/:id", auth, multer, userCtrl.updateAccount);
router.get("/accounts/:id", auth, userCtrl.getAccount);
router.delete("/accounts/:id", auth, userCtrl.deleteAccount);

module.exports = router;
