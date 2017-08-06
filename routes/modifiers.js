var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('modifiers/syntax');
});

router.get('/syntax', function (req, res, next) {
    active = 'syntax';
    res.render('modifiers/syntax', {title: 'Syntax', active: active});
});

router.get('/helpers', function (req, res, next) {
    active = 'helpers';
    res.render('modifiers/syntax', {title: 'Helpers', active: active});
});

router.get('/responsive-helpers', function (req, res, next) {
    active = 'responsive-helpers';
    res.render('modifiers/responsive-helpers', {title: 'Responsive helpers', active: active});
});

router.get('/typography-helpers', function (req, res, next) {
    active = 'typography-helpers';
    res.render('modifiers/typography-helpers', {title: 'Typography helpers', active: active});
});

module.exports = router;