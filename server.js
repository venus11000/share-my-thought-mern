const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//  Get Routes
const posts = require('./routes/api/posts');


const app = express();

//  apply middleware
app.use(bodyParser.json());

//  DB
const db = require('./config.keys').mongoDBURL;

mongoose.connect(db)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

//  Use Routes
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
