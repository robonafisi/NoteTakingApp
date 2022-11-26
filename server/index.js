//Using express for the server
const express = require('express');
const app = express();
//Cors is used to connect to the Postgres database
const cors = require('cors');


//Middlewares used
app.use(cors());
app.use(request.json());

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});