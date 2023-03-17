const router = require('express').Router();
const adminRoutes = require('./adminRoutes');
const viewerRoutes = require('./viewerRoutes');
const userRoutes = require('./userRoutes');

router.use('/admin', adminRoutes);
router.use('/viewr', viewerRoutes);
router.use('/user', userRoutes)

module.exports = router;