const { Router } = require('express');

const { routeController } = require('../controllers');

const router = Router();

router.post('/route', routeController.postRoute);

module.exports = router;
