//Using express for the server
const express = require('express');
const app = express();
//Cors is used to connect to the Postgres database
const cors = require('cors');


//Middlewares used
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
  })  

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});