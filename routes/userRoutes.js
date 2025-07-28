const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUser,
  deleteUser
} = require("../controllers/userController");
const protect = require("../middleware/auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getCurrentUser);
router.delete("/:id", protect, deleteUser);

module.exports = router;
