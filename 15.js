/**
 * Created by 黄森 on 2017/7/16.
 */
var ejs = require('ejs');
var fs =require('fs');

fs.readFile("./views/index.ejs",function (err,data) {
    var tem = data.toString();
    var dir = {a:6}

    var html = ejs.render(tem,dir);

    console.log(html)
});
