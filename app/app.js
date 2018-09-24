const express = require('express');

const app = express();

app.use(express.static('www'));

app.listen(3000,()=>{
    console('服务器连接成功')
})