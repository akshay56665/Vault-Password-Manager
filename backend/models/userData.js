const { Schema,model } = require('mongoose');

const schema=new Schema({
    service:{
        type:String
    },
    id:{
        type:String,
    },
    password:{
        type:String
    },
    user:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }]
})

const UserData=model("UserData",schema);
module.exports=UserData;