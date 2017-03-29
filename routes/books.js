var express = require('express');
var router = express.Router();
var books = require('../controler/crud');

/* GET users listing. */
router.post('/',books.insertData);
router.get('/',books.viewData)


module.exports = router;
