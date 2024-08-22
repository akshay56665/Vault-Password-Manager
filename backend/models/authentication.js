const { Schema,model } = require('mongoose');
const {hash,compare} =require('bcrypt');
const saltRound=6;
const schema=new Schema({
    fullname:{
        required:true,
        type:String,
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String,
    }
})

schema.pre('save',function(next){
    const user=this;

    if(!user.isModified('password')){
        return;
    }
    hash((user.password).toString(),saltRound,(err,hash)=>{
        if(err){
            return next(err);
        } 
        user.password=hash;
        next();
    });
})

schema.static('AuthenticateUser',async function (userEmail,userPassword) {
    const getuser=await this.find({email:userEmail});
    if(getuser.length===0){
        throw new Error("Invalid user")
    }

    const hashedPassword=getuser[0].password;
    const isMatch=await compare(userPassword,hashedPassword);
    if(!isMatch){
        throw new Error("Invalid password")
    } 
    return getuser
})

const user=model('User',schema);

module.exports =user;