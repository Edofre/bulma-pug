var express = require('express');
var router = express.Router();

// Define the route name for navigation purposes
var routeName = 'modifiers';

router.get('/', function (req, res, next) {
    res.redirect('modifiers/syntax');
});

router.get('/syntax', function (req, res, next) {
    active = 'syntax';
    res.render('modifiers/syntax', {title: 'Syntax', routeName: routeName, active: active});
});

router.get('/helpers', function (req, res, next) {
    active = 'helpers';
    res.render('modifiers/helpers', {title: 'Helpers', routeName: routeName, active: active});
});

router.get('/responsive-helpers', function (req, res, next) {
    active = 'responsive-helpers';
    res.render('modifiers/responsive-helpers', {title: 'Responsive helpers', routeName: routeName, active: active});
});

router.get('/typography-helpers', function (req, res, next) {
    active = 'typography-helpers';
    res.render('modifiers/typography-helpers', {title: 'Typography helpers', routeName: routeName, active: active});
});

module.exports = router;