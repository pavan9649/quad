const express= require('express');
const app=express();

const bodyParser = require("body-parser");
const port=process.env.PORT|| 3000;
app.use(bodyParser.json());
app.use(express.json());
require("dotenv/config");

const api = process.env.API_URL;
const usersRoutes = require("./routes/users");

app.use(`${api}`,usersRoutes );

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})
