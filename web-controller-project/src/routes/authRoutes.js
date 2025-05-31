const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const UserModel = require('../models/userModel');

const authController = new AuthController(UserModel);

router.post('/register', (req, res) => authController.register(req, res));
router.post('/login', (req, res) => authController.login(req, res));

module.exports = router;