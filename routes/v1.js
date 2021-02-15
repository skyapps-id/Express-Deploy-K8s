const express = require('express');
const hello   = require('../controllers/helloController');
const router = express.Router();

router.get('/hello', hello.index);

module.exports = router;