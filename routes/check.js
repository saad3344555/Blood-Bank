var express = require('express');
var router = express.Router();

var jsonArray = [
    {
        'title' : 'ss'
    }
];


router.get('/check',function(req,res){
    res.send(jsonArray);
    res.status(200);
});

module.exports = router;