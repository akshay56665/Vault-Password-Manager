import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddID = () => {
  const [service, setService] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState();
  const [error,setError]=useState("")
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/home/add`,{service,id,password})
    .then((res)=>{
      if(res.data==="created"){
        navigate('/');
      }
    })
    .catch((err)=>{
      setError(err.response.data)
    })
  };

  return (
    <div className="mainbody d-flex justify-content-center" style={{flexDirection:"column",height:"100vh"}}>
      {error&&<Alert style={{width:"100%",opacity:0.8}} key="danger" variant="danger">
          {error}
        </Alert>}
      <div className="d-flex justify-content-center" style={{flexDirection:"column",height:"auto"}}>
        
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 input" >
            <Form.Control
              type="text"
              value={service}
              onChange={(e)=>setService(e.target.value)}
              size="lg"
              placeholder="Services...insta,facebook,etc"
            />
          </Form.Group>

          <Form.Group className="mb-3 input" >
            <Form.Control
              type="text"
              size="lg"
              value={id}
              onChange={(e)=>setId(e.target.value)}
              placeholder="ID...abc@gamil.com"
            />
          </Form.Group>

          <Form.Group className="mb-3 input" >
            <Form.Control
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
              size="lg"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn">
            Submit
          </Button> 
        </Form>
      </div>
    </div>
  );
};

export default AddID;