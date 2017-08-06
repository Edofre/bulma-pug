var express = require('express');
var router = express.Router();

// Define the route name for navigation purposes
var routeName = 'grid';

router.get('/', function (req, res, next) {
    res.redirect('grid/columns');
});

router.get('/columns', function (req, res, next) {
    active = 'columns';
    res.render('grid/columns', {title: 'Syntax', routeName: routeName, active: active});
});

router.get('/tiles', function (req, res, next) {
    active = 'tiles';
    res.render('grid/tiles', {title: 'Tiles', routeName: routeName, active: active});
});

module.exports = router;