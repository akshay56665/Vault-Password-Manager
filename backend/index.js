require('dotenv').config()
const express=require('express');
const mongoose=require('mongoose')
const app=express();
const userroute=require('./routes/user')
const dataroute=require('./routes/data')
const bodyParser=require('body-parser');
const cors=require('cors');
const cookieParser=require('cookie-parser')

// mongoose.connect("mongodb://127.0.0.1:27017/vault")
mongoose.connect(process.env.MONGO_URL)
app.use(cors({ 
    origin: "http://localhost:5173", 
    credentials: true 
})); 

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/home',dataroute);
app.use('/api/user',userroute); 

app.listen(process.env.PORT,()=>{
    console.log('Server Started');
})