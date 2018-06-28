const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();


// Bodyparser middleware
app.use(bodyParser.json());

// Db conf

const db = require('./config/keys').mongoURI;

// Connect to db

mongoose
	.connect(db)
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log('err :', err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Servert started on port ${port}`));

