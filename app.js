const express = require('express');
const cors = require('cors');
const app  = express();

const db = require('./app/config/db');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  db.query("SELECT * FROM tb_todos")
  .then((result) => {
    res.send(result.rows);
  })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('app started at port ' + PORT);
})