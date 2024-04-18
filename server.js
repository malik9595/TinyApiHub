require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const path = require('path');
const usersModels = require('./models/Users');
const postsModels = require('./models/Posts');
const todoListModels = require('./models/TodoList');

const MongoDb_Connection_Id = process.env.MongoDb_Connection_Id;
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set
app.use(cors())

app.listen(PORT, () => console.log(`server started at ${PORT}`));

mongoose
	.connect(MongoDb_Connection_Id)
	.then(() => console.log('DB Connected'))
	.catch((err) => console.log(`something went wrong: ${err}`));

// GET OPERATIONS
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/Guide', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'guide.html'));
});

// app.get('/users', async (req, res) => {
// 	const limit = req.params.limit;
// 	const resData = await usersModels.find();
// 	res.send(resData);
// });

app.get('/users', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const resData = await usersModels.find({ id });
		res.send(resData);
	} else {
		const resData = await usersModels.find();
		res.send(resData);
	}
});

app.get('/users/:limit', async (req, res) => {
	const limit = req.params.limit;
	const isPossible = limit < 51;
	if (isPossible) {
		const resData = await usersModels.find().limit(limit);
		res.send(resData);
	} else {
		res.status(404).json({});
	}
});

app.get('/posts', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const postData = await postsModels.find({ id });
		res.status(200).json(postData);
	} else {
		const postData = await postsModels.find();
		res.status(200).json(postData);
	}
});
app.get('/posts/:limit', async (req, res) => {
	const limit = req.params.limit;
	const isPossible = limit < 21;
	if (isPossible) {
		const postData = await postsModels.find().limit(limit);
		res.status(200).json(postData);
	} else {
		res.status(404).json({});
	}
});
app.get('/todolist', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const todolist = await todoListModels.find({ id });
		res.status(200).json(todolist);
	} else {
		const todolist = await todoListModels.find();
		res.status(200).json(todolist);
	}
});
app.get('/todolist/:limit', async (req, res) => {
	const limit = req.params.limit;
	const isPossible = limit < 21;
	if (isPossible) {
		const todolist = await todoListModels.find().limit(limit);
		res.status(200).json(todolist);
	} else {
		res.status(404).json({});
	}
});

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
