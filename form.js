/**
 * Created by 黄森 on 2017/7/16.
 */
var http = require("http");
var querystring = require("querystring");

var server = http.createServer(function (req, res) {
    //如果你的访问地址是这个，并且请求类型是post
    if (req.url == "/dopost" && req.method.toLowerCase() == "post") {
        var allData = '';
        //下面是post请求接收的一个公式
        //node为了追求极致，它是一个小段一个小段接收的。
        //接受了一小段，可能就给别人去服务了。防止一个过大的表单阻塞了整个进程
        req.addListener("data", function (chunk) {
            allData += chunk;
        });
        //全部传输完毕
        req.addListener("end", function () {
            var datastring = allData.toString();
            res.end('success');
            //将datastring转为一个对象
            var dataObj = querystring.parse(datastring);
            console.log(dataObj);
            console.log("姓名：" + dataObj.name);
            console.log("性别：" + dataObj.sex);
        })
    }
});
server.listen(80, "127.0.0.1");