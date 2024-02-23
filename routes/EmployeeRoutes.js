const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/EmployeeController')

router.get("/employee",employeeController.getAllEmployees);
router.get("/employee/:id",employeeController.getEmployeeById);
router.get("/employee1/:name",employeeController.getEmployeeByname);
router.post("/employee",employeeController.addEmployee);
router.delete("/employee/:id",employeeController.deleteEmployee);
router.put("/employee/:id",employeeController.updateEmployee)
router.post("/login",employeeController.loginEmployee)
router.post("/filter",employeeController.filterEmployee)
module.exports = router;