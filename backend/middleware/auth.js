const { verifyToken } = require("./tokens");

function CheckAuth(req,res,next){
    const token=req.cookies.token;
    if(!token){
        return res.status(200).send("authenticate");
    }
    try {
        const data = verifyToken(token);
        req.name=data.name;
        req.userId = data.userid;
        req.email = data.email;
        return next()
    } catch {
        return res.status(403).send("unknown error");
    }
}

module.exports={CheckAuth}