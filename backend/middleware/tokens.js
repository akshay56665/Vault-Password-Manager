const {sign,verify} =require('jsonwebtoken');
const key=process.env.SECRET_KEY;

const createToken=(user)=>{
    const token=sign({userid:user[0]._id,email:user[0].email,name:user[0].fullname},key);
    return token
}

const verifyToken=(token)=>{
    return verify(token,key);
}

module.exports={createToken,verifyToken}