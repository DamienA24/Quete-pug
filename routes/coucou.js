const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('index.pug')
})

router.get('/coucou-pug', function (req, res) {
  res.render('coucou.pug', { title: 'Hey', sayHello: 'Hello buddy !' })
})



module.exports = router;