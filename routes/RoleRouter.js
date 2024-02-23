const roleController = require('../controllers/RoleController');
const router = require('express').Router();
router.get("/role",roleController.getAllRoles);
router.post("/role",roleController.createRole);
module.exports = router;