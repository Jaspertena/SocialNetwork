const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes')
const userRoutes = require('./userRoutes')

route.use('/user', userRoutes);
route.use('/thoughts', thoughtrRoutes);

module.exports = router;