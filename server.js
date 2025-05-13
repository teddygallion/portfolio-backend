const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pool = require('./db'); 
const app = express();
const port = 3000;


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());       

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.projects');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Error retrieving projects');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
