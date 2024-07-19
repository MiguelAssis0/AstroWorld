const pg = require('pg');
const { Pool } = pg;
const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'AstroWorld',
    password: 'admin',
    port: 5432,
};

module.exports = new Pool(config)