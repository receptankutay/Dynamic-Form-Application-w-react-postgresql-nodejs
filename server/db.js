const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "tankutayrecep",
    host: "localhost",
    port: 5432,
    database: "formtodo"
});

module.exports = pool;