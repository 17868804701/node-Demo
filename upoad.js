/**
 * Created by 黄森 on 2017/7/16.
 */

// 图片上传
var http = require("http");
var util = require("util");
var formidable = require('formidable');
var fs = require("fs");
var sd = require("silly-datetime");
var path = require("path");

var server = http.createServer(function (req, res) {
    //如果你的访问地址是这个，并且请求类型是post
    if (req.url == "/dopost" && req.method.toLowerCase() == "post") {
        //Creates a new incoming form.
        var form = new formidable.IncomingForm();
        //设置文件上传存放地址
        form.uploadDir = "./uploads";
        //执行里面的回调函数的时候，表单已经全部接收完毕了。
        form.parse(req, function (err, fields, files) {
            if (err) {
                throw err;
            }
            console.log(fields);
            console.log(files);
            console.log(util.inspect({fields: fields, files: files}));
            // 时间
            var ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');
            // 随机数
            var ran = parseInt(Math.random() * 89999 + 10000);
            // 扩展名
            var extname = path.extname(files.tupian.name);

            //执行改名
            var oldpath = __dirname + "/" + files.tupian.path;

            var newpath = __dirname + "/uploads/" + ttt + ran + extname;

            //改名
            fs.rename(oldpath,newpath,function (err) {
                if(err){
                    throw Error("改名失败");
                }
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end("成功");

            });
            //所有的文本域、单选框，都在fields存放；
            //所有的文件域，files
            res.writeHead(200, {'content-type': 'text/plain'});

            res.end("成功");
        });
    }else if(req.url == "/"){
        //呈递form.html页面
        fs.readFile("./index.html",function(err,data){
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    }else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.end("404");
    }
});
server.listen(80, "127.0.0.1");