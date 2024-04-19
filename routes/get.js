const express = require('express')
const router = express.Router()
const usersModels = require('../models/Users');
const postsModels = require('../models/Posts');
const todoListModels = require('../models/TodoList');

router.get('/users', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const resData = await usersModels.find({ id });
		res.send(resData);
	} else {
		const resData = await usersModels.find();
		res.send(resData);
	}
});

router.get('/users/:limit', async (req, res) => {
	const limit = req.params.limit;
	const isPossible = limit < 51;
	if (isPossible) {
		const resData = await usersModels.find().limit(limit);
		res.send(resData);
	} else {
		res.status(404).json({});
	}
});

router.get('/posts', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const postData = await postsModels.find({ id });
		res.status(200).json(postData);
	} else {
		const postData = await postsModels.find();
		res.status(200).json(postData);
	}
});
router.get('/posts/:limit', async (req, res) => {
	const limit = req.params.limit;
	const isPossible = limit < 21;
	if (isPossible) {
		const postData = await postsModels.find().limit(limit);
		res.status(200).json(postData);
	} else {
		res.status(404).json({});
	}
});
router.get('/todolist', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const todolist = await todoListModels.find({ id });
		res.status(200).json(todolist);
	} else {
		const todolist = await todoListModels.find();
		res.status(200).json(todolist);
	}
});
router.get('/todolist/:limit', async (req, res) => {
	const limit = req.params.limit;
	const isPossible = limit < 21;
	if (isPossible) {
		const todolist = await todoListModels.find().limit(limit);
		res.status(200).json(todolist);
	} else {
		res.status(404).json({});
	}
});

module.exports = router