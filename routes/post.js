const express = require("express");
const router = express.Router();

const { getPosts, createNewPost, getPost } = require("../controllers/post");

router.route("/").get(getPosts).post(createNewPost);
router.route("/:id").get(getPost);

module.exports = router;
