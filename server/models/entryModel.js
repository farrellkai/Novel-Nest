const { Pool } = require('pg');

const PG_URI = '***';

const pool = new Pool({
  connectionString: PG_URI,
});

const db = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

module.exports = db;
