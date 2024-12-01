const client = require("../config/db");

const getPosts = async (req, res) => {
  const query = `SELECT * FROM posts`;
  const { rows } = await client.query(query);
  res.send(rows);
};

const createNewPost = async (req, res) => {
  const { category, author, title, content } = req.body;
  const query = `INSERT INTO posts(category, author, title, content) VALUES ($1, $2, $3, $4)`;
  const params = [category, author, title, content];

  try {
    await client.query(query, params);
    res.send({ status: 201 });
  } catch (err) {
    res.send({ status: 500, err });
  }
};

const getPost = async (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM posts where id = $1`;
  const params = [id];
  const { rows } = await client.query(query, params);

  res.send(rows[0]);
};

module.exports = { getPosts, createNewPost, getPost };
