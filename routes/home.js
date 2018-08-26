const express = require('express');
//引入数据库连接文件
const connection = require('../model/db.js');

// 创建前端的一级路由
const home = express.Router();

// 当客户端以get方式请求/的时候
home.get('/index', (req, res) => {
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


home.post('/register', (req, res) => {

    let { name, email, pass } = req.body;
    //对信息进行验证
    if (name.trim().length == 0) {
        res.send({ error: 100, message: '请填写用户名' });
        return;
    }
    //查询用户名还否已经被注册
    let aql1 = 'select*from users where name=?';
    connect.query(sql1, [name], (err, rows) => {
        if (rows.length == 0) {
            //没注册过
            //将没注册信息添加到数据库
            let sql2 = 'insert into users set ?';
            req.body.pass = md5(pass);
            connect.query(sql2, req.body, err => {
                if (err == null) {
                    res.send({ sucess: true, message: '注册成功' })
                } else {
                    res.send({ error: 400, message: '注册失败' })
                }
            });
        } else {
            //注册过
            res.send({ error: 300, message: '用户名已经注册过' });
        }
    })
})

// 将前端主路由开放出去
module.exports = home;