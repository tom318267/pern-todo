const Pool = require("pg").Pool;

const pool = new Pool({
  user: "thomasrago",
  password: "2Ommy1986",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
