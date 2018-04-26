var express = require('express');
var router = express.Router();

var jsonArray = [
    {
        'title' : 'ss'
    }
];




router.get('/',function(req,res){
    jsonArray.push({
        'title' : 'mvc'
    });

    res.send(jsonArray);
    res.status(200);
});

module.exports = router;