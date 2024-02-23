const userModels = require('../models/UserModel');

const addUser = async(req,res)=>{
    try{
        const savedUser = await userModels.create(req.body);
        if(savedUser){
            res.status(200).json({
                data: savedUser,
                message:"user created successfully"
            })
        }else{
            res.status(500).json({
                message: "user not created"
            })
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}

const getAllUsers = async(req,res)=>{
    try{
        const users = await userModels.find().populate("role").populate("permissions");
        if(users && users.length>0){
            res.status(200).json({
                data: users,
                message:"users fetched successfully"
            })
        }
        else{
            res.status(500).json({
                message: "users not found"
            })
        }
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const getUserByRole = async(req,res)=>{
    try{
        const role = req.params.role;
        const users = await userModels.find({role:role})
        if(users && users.length>0){
            res.status(200).json({
                data: users,
                message:"users fetched successfully"
            })
        }
        else{
            res.status(500).json({
                message: "users not found"
            })
        }
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const addPermissionToUser = async(req,res)=>{
    try{
    const userId = req.body.userId;
    const permissionId = req.body.permissionId;
        const data = await userModels.findByIdAndUpdate(userId,{
            $push:{
                permissions: permissionId
            }
        })
        res.status(200).json({
        data: data,
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })  
    }
}

const removePermissionFromUser = async(req,res)=>{
    try{
        const userId = req.body.userId;
        const permissionId = req.body.permissionId;
        const data = await userModels.findByIdAndUpdate(userId,{
            $pull:{permissions: permissionId}
        })
        res.status(200).json({
            data: data,
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })  
    }
}

const findUserPermission = async(req,res)=>{
    try{
        const permissionId = req.body.permissionId;
        const user = await userModels.find({permissions:[permissionId]})
        res.status(200).json({
            data: user,
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })  
    }
}

const loginUser = async (req, res) => {
    try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userModels.findOne({ email: email, password: password });
        if(user) {
            res.status(200).json({
            data: user,
            message: "user logged in successfully",
            });
        }else{
            res.status(404).json({
            message: "user not found",
            });
        }
    }catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
 };

module.exports = {
    addUser,
    getAllUsers,
    getUserByRole,
    addPermissionToUser,
    removePermissionFromUser,
    findUserPermission
}
