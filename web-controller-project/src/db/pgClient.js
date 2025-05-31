const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mibase',
    password: 'papaymama17',
    port: 5432,
});

module.exports = pool;