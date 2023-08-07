const { Router } = require('express');
const profileController = require('../controllers/profile.controller');

const router = Router();

router.get('/profile', profileController.getProfile);

module.exports = {
    profileRoute: router
}