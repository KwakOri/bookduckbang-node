const express = require("express");
const router = express.Router();

const authRouter = require("../routes/auth");
const postRouter = require("../routes/post");

router.use("/auth", authRouter);
router.use("/post", postRouter);

// router.route('/')

module.exports = router;
