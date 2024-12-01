const express = require("express");
const router = express.Router();

const {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category");

router
  .route("/")
  .get(getAllCategories)
  .post(createCategory)
  .delete(deleteCategory)
  .patch(updateCategory);

module.exports = router;
