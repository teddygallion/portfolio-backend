const { Pool } = require('pg');

const pool = new Pool({
  user: 'teddy',
  database: 'portfolio',
  port: 5432,
});

module.exports = pool;