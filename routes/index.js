var express = require('express');
var router = express.Router();

// Define the route name for navigation purposes
var routeName = 'index';

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('/overview/start');
});

// Contact details, misc pages etc

module.exports = router;