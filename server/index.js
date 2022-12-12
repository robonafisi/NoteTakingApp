//Using express for the server
const express = require('express');
const app = express();
//Cors is used to connect to the Postgres database
const cors = require('cors');
const pool = require('./db');
var selectedid = pool.query("SELECT id FROM pages_central LIMIT 1");


//Middlewares used
app.use(cors());
app.use(express.json());


//Homepage
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Change the page selected
app.post('/pagechange', (req, res)=>{
  try {
    var { selectedid } = req.params;
  } catch (error) {
    console.error(err.message);
  }
})


//Open the page selected
app.get('/main', async(req,res)=>{
  try {
    const { id } = 11;
    const notepage = await pool.query("SELECT * FROM pages_central WHERE id = $1",[id]);

    res.json(notepage.rows);
    console.log(notepage);
  } catch (error) {
    console.error(err.message);
  }
});

//Open one specific page
app.get('/pages/:id', async(req,res)=>{
  try {
    const { id } = req.params;
    const notepage = await pool.query("SELECT * FROM pages_central WHERE id = $1",[id]);

    res.json(notepage.rows);
  } catch (error) {
    console.error(err.message);
  }
});

//Get the list of pages
app.get('/pages', async(req, res)=>{
  try {
    const allpages = await pool.query("SELECT * FROM pages_central");
    res.json(allpages.rows);
  } catch (error) {
    console.error(err.message);
  }
});

//Create a page with content
app.post('/newpage', async(req, res)=>{
  try {
    const { page_title, content, font_size, is_bold, is_italicised, is_colored } = req.body;

    const newPage = await pool.query(
      "INSERT INTO pages_central VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [page_title, content, font_size, is_bold, is_italicised, is_colored]
    );
    res.json(newPage);
  } catch (error) {
    console.error(err.message);
  }
});

//Delete a page based on its ID
app.delete("/deletepages/:id", async(req,res)=>{
  try {
    const { id } = req.params;
    const deletePage = await pool.query("DELETE FROM pages_central WHERE id = $1",[id]);
    res.json("Page was deleted!");
  } catch (error) {
    console.error(err.message);
  }
});


app.listen(5000, () => {
    console.log("Server has started on port 5000");
});