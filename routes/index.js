const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const postRouter = require("./post");
const categoryRoute = require("./category");

router.use("/auth", authRouter);
router.use("/post", postRouter);
router.use("/category", categoryRoute);

// router.route('/')

module.exports = router;
