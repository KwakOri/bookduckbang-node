const createPGParams = (paramCount) => {
  const arr = Array(paramCount).fill(0);
  const values = arr.map((_, i) => `\$${i + 1}`).join(",");
  return values;
};

const insert = (reqBody) => {
  if (Object.keys(reqBody).length <= 0) return null;
  const values = Object.values(reqBody);
  const columns = Object.keys(reqBody).join(",");
  const valueParams = createPGParams(Object.keys(reqBody).length);

  return { columns, values, valueParams };
};

const update = (reqBody) => {
  if (Object.keys(reqBody).length <= 0) return null;
  const reqBodyEntries = Object.entries(reqBody);
  const values = reqBodyEntries
    .map(([key, value]) => `${key} = ${value}`)
    .join(",");
  return { values };
};

const createPGQuery = {
  insert,
  update,
};

module.exports = { createPGQuery };
