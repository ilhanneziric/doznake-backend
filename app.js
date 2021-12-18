const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config');
const cors = require('cors');

//middlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const pitanjaRoute = require('./routes/pitanja');
const objaveRoute = require('./routes/objave');
const faqiRoute = require('./routes/faqi');

app.use('/pitanja', pitanjaRoute);
app.use('/objave', objaveRoute);
app.use('/faqi', faqiRoute);

app.get('/', (req,res)=>{
    res.send("we are on home");
});

mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("connected to db");
});

app.listen(3000);