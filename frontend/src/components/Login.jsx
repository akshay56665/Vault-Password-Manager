import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form"
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import {useNavigate,Link} from 'react-router-dom'

const Login = () => {
  const {register,handleSubmit,formState: { errors },} = useForm()
  const [error,setError]=useState(null)
  const navigate=useNavigate();

  const onSubmit = (data) => {
    axios.post(`/user/login`,{
      email:data.email,
      password:data.password
    })
    .then((res)=>{
      if(res.data==="Login"){
        navigate("/");
      }
    })
    .catch((err)=>{
      setError(err.response.data);
    })
  }
  
  return (
    <div className="mainbody d-flex justify-content-center" style={{height:"100vh"}}>
      <div className="d-flex justify-content-center" style={{flexDirection:"column",height:"auto"}}>
        <h2 className="text-center"><i>Login</i></h2>
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          {error&&<Alert style={{width:"100%"}} key="danger" variant="danger">
            {error} 
          </Alert>}
          <Form.Group className="mb-3 input" controlId="Email">
            <Form.Control
              type="email"
              placeholder="Enter email"
              size="lg"
              {...register('email',{required:{value:true,message:"Email is mandatory"}})}
            />
          </Form.Group>

          <Form.Group className="mb-3 input" controlId="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              size="lg"
              {...register('password',{minLength:{value:8,message:"Min length is 8"}})}
            />
          </Form.Group>
          {errors.email&&<p>{errors.email.message}</p>}
          {errors.password&&<p>{errors.password.message}</p>}
          <Button variant="primary" type="submit" className="btn">
            Submit
          </Button>
          <h4 style={{color:"azure"}}> <i>New user </i>{<Link to="/signup" >Signup</Link>}</h4> 
        </Form>
      </div>
    </div>
  );
};

export default Login;