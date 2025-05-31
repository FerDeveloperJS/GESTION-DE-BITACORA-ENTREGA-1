const express = require('express');
const router = express.Router();
const BitacoraController = require('../controllers/bitacoraController');
const BitacoraModel = require('../models/bitacoraModel');

const bitacoraController = new BitacoraController(BitacoraModel);

router.post('/bitacora', (req, res) => bitacoraController.crearBitacora(req, res));
router.post('/actividad', (req, res) => bitacoraController.crearActividad(req, res));
router.get('/actividades', (req, res) => bitacoraController.listarActividades(req, res));

module.exports = router;