const router = require('express').Router();
const adminRoutes = require('./adminRoutes');
const viewerRoutes = require('./viewerRoutes');

router.use('/admin', adminRoutes);
router.use('/viewr', viewerRoutes);

module.exports = router;