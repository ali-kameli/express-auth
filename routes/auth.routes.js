const { Router } = require('express');
const authController = require('../controllers/auth.controller');

const router = Router();

router.post('/login', authController.Login);

router.post('/register', authController.Register);

module.exports = {
    authRoute: router
}