const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const employeeRoutes = require('./routes/EmployeeRoutes.js')
const roleRoutes = require('./routes/RoleRouter.js')
const userRoutes = require('./routes/UserRouter.js')
const permissionRoutes = require('./routes/PermissionRoutes.js')

app.use("/employee",employeeRoutes)
app.use("/role",roleRoutes)
app.use("/user",userRoutes)
app.use("/permission",permissionRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/mern",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database is connected")
}).catch((err)=>{
    console.log(err)
})

const PORT = 3001
app.listen(PORT,()=>{
    console.log("Server is running on port ",PORT)
})