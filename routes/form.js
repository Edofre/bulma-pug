var express = require('express');
var router = express.Router();

// Define the route name for navigation purposes
var routeName = 'form';

router.get('/', function (req, res, next) {
    res.redirect('form/general');
});

router.get('/general', function (req, res, next) {
    active = 'general';
    res.render('form/general', {title: 'general', routeName: routeName, active: active});
});

router.get('/input', function (req, res, next) {
    active = 'input';
    res.render('form/input', {title: 'input', routeName: routeName, active: active});
});

router.get('/textarea', function (req, res, next) {
    active = 'textarea';
    res.render('form/textarea', {title: 'textarea', routeName: routeName, active: active});
});

router.get('/select', function (req, res, next) {
    active = 'select';
    res.render('form/select', {title: 'select', routeName: routeName, active: active});
});

router.get('/checkbox', function (req, res, next) {
    active = 'checkbox';
    res.render('form/checkbox', {title: 'checkbox', routeName: routeName, active: active});
});

router.get('/radio', function (req, res, next) {
    active = 'radio';
    res.render('form/radio', {title: 'radio', routeName: routeName, active: active});
});

router.get('/file', function (req, res, next) {
    active = 'file';
    res.render('form/file', {title: 'file', routeName: routeName, active: active});
});

module.exports = router;