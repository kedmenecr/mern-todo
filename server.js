const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');




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

// use routers

app.use('/api/items', items);

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Servert started on port ${port}`));
