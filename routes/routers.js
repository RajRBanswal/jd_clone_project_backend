const express = require("express");
const { userRegistration, userLogin } = require("../controllers/UsersControllers");
const router = express.Router();

router.post("/api/user-regitration", userRegistration);

router.post("/api/user-login", userLogin);

module.exports = router;
