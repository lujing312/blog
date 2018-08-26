const express = require('express');
const connection = require('../model/db.js');

// 创建前端的一级路由
const home = express.Router();

// 当客户端以get方式请求/的时候
home.get('/index' , (req, res) => {
	// 向客户端做出响应
	res.render('home/index');
});

// 关于我们
home.get('/about', (req, res) => {
	res.render('home/about');
});

// 招聘页面
home.get('/join', (req, res) => {
	res.render('home/join');
});

// 注册页面
home.get('/register', (req, res) => {
	res.render('home/register');
});

// 登录页面
home.get('/login', (req, res) => {
	res.render('home/login');
});

// 将前端主路由开放出去
module.exports = home;