const { Router } = require('express');
const { authRoute } = require('./auth.routes');
const { profileRoute } = require('./profile.routes');
const { checkAuth } = require('../middlewares/checkAuth');

const router = Router();

router.use('/auth', authRoute);

router.use('/user', checkAuth, profileRoute);

module.exports = { allRoutes: router }