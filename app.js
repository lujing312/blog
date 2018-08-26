const express = require('express');
//创建web服务器
const app = express();

//当客户端以get方式请求
app.get('/', (req, res) => {
    res.send('Hello')
})

//服务器监听3000端口
app.listen(3000, err => {
    if (err == null) {
        console.log('服务器启动成功,访问http://localhost:3000');

    } else {

    }
})