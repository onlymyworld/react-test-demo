const express = require('express');
const path = require('path');
const app = new express();

app.use(express.static(__dirname+'/'))

app.get('*',function(request,response){
	response.sendFile(path.resolve(__dirname,'index.html'))
})

app.listen(80);
console.log('服务在端口80启动！')