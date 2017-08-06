var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('layout/containers');
});

router.get('/containers', function (req, res, next) {
    active = 'containers';
    res.render('layout/containers', {title: 'Containers', active: active});
});

router.get('/hero', function (req, res, next) {
    active = 'hero';
    res.render('layout/hero', {title: 'Hero', active: active});
});

router.get('/section', function (req, res, next) {
    active = 'section';
    res.render('layout/section', {title: 'Section', active: active});
});

router.get('/footer', function (req, res, next) {
    active = 'footer';
    res.render('layout/footer', {title: 'Footer', active: active});
});

module.exports = router;