const fs = require('fs');
const createFile = () => {
    fs.writeFile('abc.txt','HELLO',(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      })
}
const DeleteDemo = ()=>{
    fs.unlinkSync('abc.txt') 
}
module.exports = {createFile , DeleteDemo}