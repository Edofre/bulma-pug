var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('overview/start', {title: 'Start', subtitle: "Bulma templates in pug!"});
});

module.exports = router;