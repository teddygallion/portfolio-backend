require('dotenv').config();
const { Pool } = require('pg');
const DB_URL = process.env.DATABASE_URL || "No db url set"
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: {
    rejectUnauthorized: false,
  },
});
console.log('DB config in use:', {
  PGUSER: process.env.PGUSER,
  PGHOST: process.env.PGHOST,
  PGDATABASE: process.env.PGDATABASE,
  PGPORT: process.env.PGPORT,
  PGSSLMODE: process.env.PGSSLMODE,
});
console.log(DB_URL)
module.exports = pool;