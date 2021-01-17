const express = require('express');
require('dotenv').config();
const cors = require('cors');
const dbConnection = require('./database/connection');
const app = express();
dbConnection();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(require('./routes/route'));
app.use('/', (req, res)=>{
    res.json({
        "/": "GET || Welcome to APIs",
        "/daily": "GET || Summary of daily data",
        "/cdaily": "GET || Cumulative daily data",
        "/province": "GET || Summary of daily data of all provinces",
        "/cprovince": "GET || Cumulative data of every province",

    });
});
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log('Server started successully');
})