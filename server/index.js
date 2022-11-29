//Using express for the server
const express = require('express');
const app = express();
//Cors is used to connect to the Postgres database
const cors = require('cors');
const pool = require('./db');


//Middlewares used
app.use(cors());
app.use(express.json());


//Homepage
app.get('/', (req, res) => {
  res.send('Hello World!')
})  



//Get the list of pages
app.get('/pages', async(req, res)=>{
  try {
    const alltodos = await pool.query("SELECT * FROM pages_central");
    res.json(alltodos.rows);
  } catch (error) {
    console.error(err.message);
  }
})

//Create a page with content
app.post('/newpage', async(req, res)=>{
  try {
    const { page_title, content, font_size, is_bold, is_italicised, is_colored } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO pages_central VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [page_title, content, font_size, is_bold, is_italicised, is_colored]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(err.message);
  }
})


app.listen(5000, () => {
    console.log("Server has started on port 5000");
});