var express = require('express');
var path = require('path');

var app = express();

var index = require('./routes/index');
var api_check = require('./routes/check');

app.use('/',index);
app.use('/api',api_check);


app.listen(3000,function(req,res){
    console.log('server started at 3000');
});