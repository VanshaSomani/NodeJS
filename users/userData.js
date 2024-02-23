var uName = "";
var uAge = 0;
function setUserData(name , age){
    uName = name;
    uAge = age;
}
function getUserData() {
    return uName+" "+uAge;
}

module.exports = {
    setUserData,
    getUserData
};