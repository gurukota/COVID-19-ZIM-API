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
        "/summary": "GET || Total data contai…aths and cases in Zimbabwe",
        "/provinces": "GET || Total data of every state together",
        "/province/:provincename": "GET || Total data of everything of particular"
    });
});
const port = process.env.PORT || 3001
app.listen(port, ()=>{
    console.log('Tapinda');
})