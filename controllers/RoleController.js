const roleMode = require('../models/RoleModel')
const createRole = async(req,res)=>{
    try{
        const saveRole = await roleMode.create(req.body);
        res.status(200).json({
            data: saveRole,
            message: "Role Added"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}
const getAllRoles = async(req,res)=>{
    try{
        const roles = await roleMode.find();
        res.status(200).json({
            data: roles,
            message: "All Role"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}
module.exports = {
    createRole,
    getAllRoles
}