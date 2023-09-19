const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

router.get(
  '/administrar_servicios',
  servicesController.administrarServiciosGet
);

router.get('/servicios', servicesController.serviciosGet);

module.exports = router;
