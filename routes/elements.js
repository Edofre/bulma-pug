var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('elements/box');
});

router.get('/box', function (req, res, next) {
    active = 'box';
    res.render('elements/box', {title: 'Box', active: active});
});

router.get('/button', function (req, res, next) {
    active = 'button';
    res.render('elements/box', {title: 'Button', active: active});
});

router.get('/content', function (req, res, next) {
    active = 'content';
    res.render('elements/content', {title: 'Content', active: active});
});

router.get('/delete', function (req, res, next) {
    active = 'delete';
    res.render('elements/delete', {title: 'Delete', active: active});
});

router.get('/icon', function (req, res, next) {
    active = 'icon';
    res.render('elements/icon', {title: 'Icon', active: active});
});

router.get('/image', function (req, res, next) {
    active = 'image';
    res.render('elements/image', {title: 'Image', active: active});
});

router.get('/notification', function (req, res, next) {
    active = 'notification';
    res.render('elements/notification', {title: 'Notification', active: active});
});

router.get('/progress', function (req, res, next) {
    active = 'progress';
    res.render('elements/progress', {title: 'Progress', active: active});
});

router.get('/table', function (req, res, next) {
    active = 'table';
    res.render('elements/table', {title: 'Table', active: active});
});

router.get('/tag', function (req, res, next) {
    active = 'tag';
    res.render('elements/tag', {title: 'Tag', active: active});
});

router.get('/title', function (req, res, next) {
    active = 'title';
    res.render('elements/title', {title: 'Title', active: active});
});


module.exports = router;