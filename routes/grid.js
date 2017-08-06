var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('grid/columns');
});

router.get('/columns', function (req, res, next) {
    active = 'columns';
    res.render('grid/columns', {title: 'Syntax', active: active});
});

router.get('/tiles', function (req, res, next) {
    active = 'tiles';
    res.render('grid/tiles', {title: 'Tiles', active: active});
});

module.exports = router;