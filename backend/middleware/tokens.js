const {sign,verify} =require('jsonwebtoken');
const secret_key="@!$*%^$&&&($%^$#&*)";

const createToken=(user)=>{
    const token=sign({userid:user[0]._id,email:user[0].email,name:user[0].fullname},secret_key);
    return token
}

const verifyToken=(token)=>{
    return verify(token,secret_key);
}

module.exports={createToken,verifyToken}