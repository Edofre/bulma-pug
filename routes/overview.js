var express = require('express');
var router = express.Router();

// Define the route name for navigation purposes
var routeName = 'overview';

router.get('/', function (req, res, next) {
    res.redirect('overview/start');
});

router.get('/start', function (req, res, next) {
    active = 'start';
    res.render('overview/start', {title: 'Start', routeName: routeName, active: active});
});

router.get('/customize', function (req, res, next) {
    active = 'customize';
    res.render('overview/customize', {title: 'Customize', routeName: routeName, active: active});
});

router.get('/classes', function (req, res, next) {
    active = 'classes';
    res.render('overview/classes', {title: 'Classes', routeName: routeName, active: active});
});

router.get('/modular', function (req, res, next) {
    active = 'modular';
    res.render('modifiers/modular', {title: 'Modular', routeName: routeName, active: active});
});

router.get('/responsiveness', function (req, res, next) {
    active = 'responsiveness';
    res.render('modifiers/responsiveness', {title: 'Responsiveness', routeName: routeName, active: active});
});

router.get('/variables', function (req, res, next) {
    active = 'variables';
    res.render('modifiers/variables', {title: 'Variables', routeName: routeName, active: active});
});

router.get('/colors', function (req, res, next) {
    active = 'colors';
    res.render('modifiers/colors', {title: 'Colors', routeName: routeName, active: active});
});

router.get('/functions', function (req, res, next) {
    active = 'functions';
    res.render('modifiers/functions', {title: 'functions', routeName: routeName, active: active});
});

router.get('/mixins', function (req, res, next) {
    active = 'mixins';
    res.render('modifiers/mixins', {title: 'mixins', routeName: routeName, active: active});
});


module.exports = router;