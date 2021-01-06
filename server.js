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
        "/:": "Covid 19 API Zimbabwe",
        "/summary:": "Covid 19 API Zimbabwe",
        "/provinces:": "Covid 19 API Zimbabwe",
        "/province/provincename:": "Covid 19 API Zimbabwe"
    });
});
const port = process.env.PORT || 3001
app.listen(port, ()=>{
    console.log('Tapinda');
})