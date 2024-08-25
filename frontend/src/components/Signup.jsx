import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import './Signup.css'
import { useForm } from "react-hook-form"
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Url} from '../Url';

const Signup = () => {
  const {register,handleSubmit,formState: { errors },} = useForm()
  const [error,setError]=useState(null)
  const navigate=useNavigate()  
  const onSubmit = (data) => {
    axios.post(`${Url}/user/signup`,{
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }).then((res)=>{
      if(res.data==='signed'){
        navigate('/')     
      }
    }).catch((err)=>{
      setError(err.response.data);
    })
  }

  return (
    <div className="mainbody d-flex justify-content-center" style={{height:"100vh"}}>
      <div className="d-flex justify-content-center" style={{flexDirection:"column",height:"auto"}}>
        <h2 className="text-center"><i>Signup</i></h2>
        
        <Form className='form' onSubmit={handleSubmit(onSubmit)}>
          {error&&<Alert key="danger" variant="danger">
          {error} 
          </Alert>}
          <Form.Group className="mb-3 input" controlId="Name">
            <Form.Control type="text" size='lg' placeholder="Enter full name here..."  {...register("fullname")}/>
          </Form.Group>

          <Form.Group className="mb-3 input" controlId="Email">
            <Form.Control type="email" size='lg' placeholder="Enter email" {...register("email",{required:{value:true,message:"Email is mandatory"}})}/>
          </Form.Group>

          <Form.Group className="mb-3 input" controlId="Password">
            <Form.Control type="password" size='lg' placeholder="Password" {...register("password",{minLength:{value:8,message:"Min length is 8"},})}/>
          </Form.Group>
          {errors.password&&<p>{errors.password.message}</p>}
          {errors.email&&<p>{errors.email.message}</p>}
          <Button variant="primary" type="submit" className='btn'>
            Submit
          </Button>
          <h4 style={{color:"azure"}}><i>Already have an account</i> {<a href="/login">Login</a>}</h4> 
        </Form>
      </div>
    </div>
  )
}

export default Signup
