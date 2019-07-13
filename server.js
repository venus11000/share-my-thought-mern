const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//  apply middleware
app.use(bodyParser.json());

//  DB
const db = require('./config.keys').mongoDBURL;

mongoose.connect(db)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.use('/', (req, res) => res.send("Welcome to Share My Thought..."));

app.listen(port, () => console.log(`Server started on port ${port}`));