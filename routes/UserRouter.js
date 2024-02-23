const userController = require('../controllers/UserConroller');
const router = require('express').Router();
router.post("/user",userController.addUser);
router.get("/user",userController.getAllUsers);
router.get("/user/:role",userController.getUserByRole);
router.put("/addpermission",userController.addPermissionToUser);
router.put("/removepermission",userController.removePermissionFromUser);
router.get("/finduserpermission",userController.findUserPermission);
module.exports = router;