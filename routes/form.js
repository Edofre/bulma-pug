var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('form/general');
});

router.get('/general', function (req, res, next) {
    active = 'general';
    res.render('form/general', {title: 'general', active: active});
});

router.get('/input', function (req, res, next) {
    active = 'input';
    res.render('form/input', {title: 'input', active: active});
});

router.get('/textarea', function (req, res, next) {
    active = 'textarea';
    res.render('form/textarea', {title: 'textarea', active: active});
});

router.get('/select', function (req, res, next) {
    active = 'select';
    res.render('form/select', {title: 'select', active: active});
});

router.get('/checkbox', function (req, res, next) {
    active = 'checkbox';
    res.render('form/checkbox', {title: 'checkbox', active: active});
});

router.get('/radio', function (req, res, next) {
    active = 'radio';
    res.render('form/radio', {title: 'radio', active: active});
});

router.get('/files', function (req, res, next) {
    active = 'files';
    res.render('form/files', {title: 'files', active: active});
});

module.exports = router;