const authValidation = (req,res,next) => {

    var auth = req.headers.token;
    console.log(auth);

    if(auth==undefined){
        res.status(401).json({
            message: "Token required"
        })
    }
    else{
        if(auth=="true"){
            
            next();
        }
        else{
            res.status(401).json({
                message: "Unauthorized"
            })
        }
    }


    // if(auth==true){
    //     next();
    // }
    // else{
    //     res.status(401).json({
    //         message: "Unauthorized"
    //     })
    // }

}

module.exports = {
    authValidation
}