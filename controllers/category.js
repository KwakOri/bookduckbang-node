const client = require("../config/db");
const { createPGQuery } = require("../utils/postgresql");

const getAllCategories = async (req, res) => {
  const query = "SELECT * FROM categories";
  const { rows } = await client.query(query);
  res.send(rows);
};

const createCategory = async (req, res) => {
  try {
    const { columns, values, valueParams } = createPGQuery.insert(req.body);
    const query = `INSERT INTO categories(${columns}) VALUES(${valueParams})`;

    await client.query(query, values);
    res.send({ success: true });
  } catch (err) {
    res.send({ success: false, err });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { category_name } = req.body;
    const query = "DELETE FROM categories WHERE category_name = $1";
    const params = [category_name];
    await client.query(query, params);
    res.send({ success: true });
  } catch (err) {
    res.send({ success: false, err });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { where, ...replaceValues } = req.body;
    const { values } = createPGQuery.update(replaceValues);
    await client.query(`UPDATE categories SET ${values} WHERE ${where}`);
    res.send({ success: true });
  } catch (err) {
    res.send({ success: false, err });
  }
};

module.exports = {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
};
