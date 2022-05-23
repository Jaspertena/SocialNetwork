const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes')
const userRoutes = require('./userRoute')

router.use('/user', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;