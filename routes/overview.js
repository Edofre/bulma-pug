var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/start', function (req, res, next) {
    active = 'start';
    res.render('overview/start', {title: 'bulma-pug', subtitle: "Bulma templates in pug!", active: active});
});

module.exports = router;