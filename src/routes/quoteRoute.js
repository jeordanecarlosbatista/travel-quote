const { Router } = require('express');

const { quoteController } = require('../controllers');

const router = Router();

router.get('/quote/:from/:to', quoteController.getQuoteFromTo);

module.exports = router;
