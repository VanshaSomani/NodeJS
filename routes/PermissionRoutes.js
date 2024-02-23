const router = require('express').Router();
const permissionController = require('../controllers/PermissionController');

router.post('/permission', permissionController.addPermission);
router.get('/permission', permissionController.getAllPermissions);
module.exports = router;