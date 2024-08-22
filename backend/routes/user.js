const express=require('express');
const { handleSignUp,handleLogin,handleLogout } = require('../controllers/user')

const router=express.Router();

router.post('/signup',handleSignUp);

router.post('/login',handleLogin);

router.get('/logout',handleLogout);
module.exports=router