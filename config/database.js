const { createPool } = require('mysql');

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.MYSQL_DB,
    connectionLimit: 5
});

console.log('pool: ', pool);

module.exports = pool;