const employeeModel = require('../models/EmployeeModel')

const addEmployee = (req , res)=>{
    console.log("req body - ",req.body);
    const employee = req.body;
    const empObj = new employeeModel(employee);
    empObj.save().then((employee)=>{
        res.status(201).json({
            data: employee,
            message: "Employee Added"
        })
    }).catch((err)=>{
        res.status(500).json({
            message: err.message
        })
    })
}

const deleteEmployee = (req,res)=>{
    var id = req.params.id;
    employeeModel.findByIdAndDelete(id).then((employee)=>{
        if(employee!=null || employee!= undefined){
            res.status(200).json({
                data: employee,
                message:"employee deleted successfully"
            })
        }
        else{
            res.status(404).json({
                data: [],
                message:"employee not found"
            })
        }
    }).catch((err)=>{
        res.status(500).json({
            message: err.message
        })
    })

}

const getAllEmployees = (req,res)=>{
    employeeModel.find().then((employees)=>{
        res.status(200).json({
            data: employees,
            message:"employees fetched successfully"
        })
    }).catch((err)=>{
        res.staus(500).json({
            message: err.message
        })
    })

}

const getEmployeeById = (req,res)=>{
    const id = req.params.id; //id 
    employeeModel.findById(id).then((employee)=>{
        res.status(200).json({
            data: employee,
            message:"employee fetched successfully"
        })
    }).catch((err)=>{
        res.status(500).json({
            message: err.message
        })
    })

}

// const getEmployeeByname = (req,res)=>{
//     const name = req.params.name;
//     employeeModel.find({name:name}).then((employee)=>{
//         res.status(200).json({
//             data: employee,
//             message:"employee fetched successfully"
//         })
//     }).catch((err)=>{
//         res.status(500).json({
//             message: err.message
//         })
//     })
// }

const getEmployeeByname = (req,res)=>{
    const name = req.params.name;
    employeeModel.find({name:name}).then((employee)=>{
        if(employee && employee.length>0){
            res.status(200).json({
                data: employee,
                message:"employee fetched successfully",
            })
        }
            else{
                res.status(404).json({
                data: [],
                message:"employee not found",
                })
            }
        
    }).catch((err)=>{
        res.status(500).json({
            message: err.message
        })
    })

}

const updateEmployee =(req,res)=>{
    const id = req.params.id;
    const data ={
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    }
    const savedData = employeeModel.findByIdAndUpdate(id,data)
    savedData.then((employee)=>{
        res.status(200).json({
            data: employee,
            message:"employee updated successfully"
        })
    }).catch((err)=>{
        res.status(500).json({
            message: err.message
        })
    })
}

const   loginEmployee = async(req,res)=>{ 
    try{
        const data = await employeeModel.findOne({email:req.body.email,password:req.body.password})
        if(data && data !=undefined){
            res.status(200).json({
                employee: data,
                message:"employee logged in successfully"
            })
        }
        else{
            res.status(404).json({
                data: [],
                message:"employee not found"
            })
        }
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}


const filterEmployee = async(req,res)=>{
        const query = req.query;
        console.log("query",query);
        try{
        const data = await employeeModel.find({...query})
        res.status(200).json({
            data: data,
            message:"employee filtered"
        })
        }catch(err){
            res.status(500).json({
                message: err.message
            })
        }
        
}

module.exports = {
    addEmployee,
    getAllEmployees,
    getEmployeeById,
    getEmployeeByname,
    deleteEmployee,
    updateEmployee,
    loginEmployee,
    filterEmployee
}