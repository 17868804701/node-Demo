/**
 * Created by 黄森 on 2017/6/13.
 */
var express = require('express');


var app = express();

app.get("/",function (req,res) {
    res.send("你好");
});


app.get("/haha",function (req,res) {
    res.send("你好,hahahhahahah");
});


app.get('/teacher/:gonghao',function (req,res) {
   res.send("工号"+req.params.gonghao)
});

app.listen(3000);