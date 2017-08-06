var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('components/breadcrumb');
});

router.get('/breadcrumb', function (req, res, next) {
    active = 'breadcrumb';
    res.render('components/breadcrumb', {title: 'Breadcrumb', active: active});
});

router.get('/card', function (req, res, next) {
    active = 'card';
    res.render('components/card', {title: 'Card', active: active});
});

router.get('/dropdown', function (req, res, next) {
    active = 'dropdown';
    res.render('components/dropdown', {title: 'Dropdown', active: active});
});

router.get('/level', function (req, res, next) {
    active = 'level';
    res.render('components/level', {title: 'Level', active: active});
});

router.get('/media-object', function (req, res, next) {
    active = 'media-object';
    res.render('components/media-object', {title: 'Media Object', active: active});
});

router.get('/menu', function (req, res, next) {
    active = 'menu';
    res.render('components/menu', {title: 'Menu', active: active});
});

router.get('/message', function (req, res, next) {
    active = 'message';
    res.render('components/message', {title: 'Message', active: active});
});

router.get('/modal', function (req, res, next) {
    active = 'modal';
    res.render('components/modal', {title: 'Modal', active: active});
});

router.get('/navbar', function (req, res, next) {
    active = 'navbar';
    res.render('components/navbar', {title: 'Navbar', active: active});
});

router.get('/pagination', function (req, res, next) {
    active = 'pagination';
    res.render('components/pagination', {title: 'Pagination', active: active});
});

router.get('/panel', function (req, res, next) {
    active = 'panel';
    res.render('components/panel', {title: 'Panel', active: active});
});

router.get('/tabs', function (req, res, next) {
    active = 'tabs';
    res.render('components/tabs', {title: 'Tabs', active: active});
});


module.exports = router;