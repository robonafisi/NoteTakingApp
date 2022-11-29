const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Database21!",
    host: "localhost",
    port: 2000,
    database: "Notetaking"
});

module.exports = pool;