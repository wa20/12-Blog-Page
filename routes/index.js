const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./api')

const router = require('express').Router();

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;