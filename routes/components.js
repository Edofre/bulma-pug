var express = require('express');
var router = express.Router();

// Define the route name for navigation purposes
var routeName = 'components';

router.get('/', function (req, res, next) {
    res.redirect('components/breadcrumb');
});

router.get('/breadcrumb', function (req, res, next) {
    active = 'breadcrumb';
    res.render('components/breadcrumb', {title: 'Breadcrumb', routeName: routeName, active: active});
});

router.get('/card', function (req, res, next) {
    active = 'card';
    res.render('components/card', {title: 'Card', routeName: routeName, active: active});
});

router.get('/dropdown', function (req, res, next) {
    active = 'dropdown';
    res.render('components/dropdown', {title: 'Dropdown', routeName: routeName, active: active});
});

router.get('/level', function (req, res, next) {
    active = 'level';
    res.render('components/level', {title: 'Level', routeName: routeName, active: active});
});

router.get('/media-object', function (req, res, next) {
    active = 'media-object';
    res.render('components/media-object', {title: 'Media Object', routeName: routeName, active: active});
});

router.get('/menu', function (req, res, next) {
    active = 'menu';
    res.render('components/menu', {title: 'Menu', routeName: routeName, active: active});
});

router.get('/message', function (req, res, next) {
    active = 'message';
    res.render('components/message', {title: 'Message', routeName: routeName, active: active});
});

router.get('/modal', function (req, res, next) {
    active = 'modal';
    res.render('components/modal', {title: 'Modal', routeName: routeName, active: active});
});

router.get('/navbar', function (req, res, next) {
    active = 'navbar';
    res.render('components/navbar', {title: 'Navbar', routeName: routeName, active: active});
});

router.get('/pagination', function (req, res, next) {
    active = 'pagination';
    res.render('components/pagination', {title: 'Pagination', routeName: routeName, active: active});
});

router.get('/panel', function (req, res, next) {
    active = 'panel';
    res.render('components/panel', {title: 'Panel', routeName: routeName, active: active});
});

router.get('/tabs', function (req, res, next) {
    active = 'tabs';
    res.render('components/tabs', {title: 'Tabs', routeName: routeName, active: active});
});


module.exports = router;