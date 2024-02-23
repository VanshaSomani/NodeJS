const permissionModel = require('../models/PermissionModel')
const addPermission = async (req, res) => {
    try{
        const savedPermission = await permissionModel.create(req.body);
        res.status(201).json({
            status: "success",
            data: savedPermission
        });
    }
    catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
}
const getAllPermissions = async (req, res) => {   
    try{
        const permissions = await permissionModel.find();
        res.status(200).json({
            status: "success",
            data: permissions
        });
    }
    catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
}
module.exports = {
addPermission,
getAllPermissions
}