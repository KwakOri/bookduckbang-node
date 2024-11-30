const express = require("express");
const router = express.Router();

const { getAllPosts, createNewPost, getPost } = require("../controllers/post");

router.route("/").get(getAllPosts).post(createNewPost);
router.route("/:id").get(getPost);

module.exports = router;
