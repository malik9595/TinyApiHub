require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const usersModels = require('./models/Users');
const postsModels = require('./models/Posts');
const todoListModels = require('./models/TodoList');

// const MongoDb_Connection_Id = process.env.MongoDb_Connection_Id;
const PORT = process.env.PORT || 5000;

// import routes
const getRoute = require('./routes/get');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(getRoute);
app.use(express.static(path.join(__dirname,'public')))
app.listen(PORT, () => console.log(`server started at ${PORT}`));

mongoose
	.connect(process.env.MongoDb_Connection_Id)
	.then(() => console.log('DB Connected'))
	.catch((err) => console.log(`something went wrong: ${process.env.MongoDb_Connection_Id}`));



// POST OPERATIONS

app.post('/:any', (req, res) => {
	const data = req.body;
	res.status(201).json(data);
});
app.put('/:any', (req, res) => {
	const id = req.query.id;
	const data = req.body;
	res.status(201).json({ id, userId: id, ...data });
});
app.patch('/:any', (req, res) => {
	const id = req.query.id;
	const data = req.body;
	res.status(201).json({
		userId: id,
		id: id,
		title: 'this is title',
		body: 'Hello body',
		...data,
	});
});

app.delete('/:any', (req, res) => {
	res.status(201).json({});
});

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, 'public', '404.html'));
});
