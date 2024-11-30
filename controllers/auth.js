const client = require("../config/db");

const getUsers = async (req, res) => {
  const { rows } = await client.query("SELECT * FROM users");

  res.send(rows);
};

module.exports = { getUsers };
