const express=require('express');
const { handleCreation,handleDelete,handleEdit,handleCheck } = require('../controllers/userData');
const { Verify } = require('../middleware/auth');
const UserData = require('../models/userData');

const router=express.Router();

router.get('/',Verify,async (req,res)=>{
    const userdata=await UserData.find({user:req.userId})
    const data=[];
    for(ele of userdata){
        data.push([ele.service,ele.id,ele.password]);
    }
    return res.json({name:req.name,email:req.email,data:data});
})
router.post('/add',handleCreation);

router.post('/edit',handleEdit);

router.post('/check',handleCheck)

router.post('/delete',handleDelete);
module.exports=router