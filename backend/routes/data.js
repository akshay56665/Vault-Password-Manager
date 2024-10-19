const express=require('express');
const { handleCreation,handleDelete,handleEdit,handleGiveData } = require('../controllers/userData');
const { CheckAuth } = require('../middleware/auth');
const UserData = require('../models/userData');

const router=express.Router();

router.get('/',CheckAuth,async (req,res)=>{
    const userdata=await UserData.find({user:req.userId})
    const data=[];
    for(ele of userdata){
        data.push({ service:ele.service, userId:ele.id, password:ele.password});
    }
    return res.json({name:req.name,email:req.email,data:data});
})
router.post('/add',handleCreation);

router.post('/edit',handleEdit);

router.post('/getuser',handleGiveData)

router.post('/delete',handleDelete);
module.exports=router