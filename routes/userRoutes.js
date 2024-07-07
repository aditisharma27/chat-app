const express = require("express");
const { registerUser, authUser, allUsers } = require("../controllers/userControllers");
const { protect } = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.route("/").post(registerUser).get(protect,allUsers);           // protect to ensure that user is loggedin/registered first
router.post("/login", authUser);

module.exports = router;
