const express = require('express');
const router = express.Router();
const usersModels = require('../models/Users');
const postsModels = require('../models/Posts');
const todoListModels = require('../models/TodoList');

router.get('/users', async (req, res) => {
	const { id } = req.query;
	if (id) {
		try {
			const resData = await usersModels.find({ id });
			res.send(resData);
		} catch (err) {
			res.status(400).json(err.message);
		}
	} else {
		const resData = await usersModels.find();
		res.send(resData);
	}
});

router.get('/users/:limit', async (req, res) => {
	const limit = req.params.limit;
	try {
		const resData = await usersModels.find().limit(limit);
		res.send(resData);
	} catch (err) {
		res.status(400).json(err.message);
	}
});

router.get('/posts', async (req, res) => {
	const { id } = req.query;
	if (id) {
		try {
			const postData = await postsModels.find({ id });
			res.status(200).json(postData);
		} catch (err) {
			res.status(400).json(err.message);
		}
	} else {
		const postData = await postsModels.find();
		res.status(200).json(postData);
	}
});
router.get('/posts/:limit', async (req, res) => {
	const limit = req.params.limit;
	try {
		const postData = await postsModels.find().limit(limit);
		res.status(200).json(postData);
	} catch (err) {
		res.status(400).json(err.message);
	}
});
router.get('/todolist', async (req, res) => {
	const { id } = req.query;
	if (id) {
		try {
			const todolist = await todoListModels.find({ id });
			res.status(200).json(todolist);
		} catch (err) {
			res.status(400).json(err.message);
		}
	} else {
		const todolist = await todoListModels.find();
		res.status(200).json(todolist);
	}
});
router.get('/todolist/:limit', async (req, res) => {
	const limit = req.params.limit;

	try {
		const todolist = await todoListModels.find().limit(limit);
		res.status(200).json(todolist);
	} catch (err) {
		res.status(400).json(err.message);
	}
});

module.exports = router;
