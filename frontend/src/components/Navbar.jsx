import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import {baseUrl} from '../Url';

const Navbar = ({name}) => {
  const [err,setErr]=useState(null)

  const userLogout=()=>{
    axios.get(`${baseUrl}/user/logout`)
    .then(res=>{
      window.location.reload()
    })
    .catch((err)=>setErr(err))
  }

  return (
    <>
    {err&& 
      (<Alert style={{opacity:0.7}} key="danger" variant="danger">
          {err}
      </Alert>)}
    <nav>
      <NavLink to="/" style={({ isActive }) => { return isActive ? { color: "aquamarine" } : {}; }}>
        <h5>Vault</h5>
      </NavLink>
      <NavLink to="/add" style={({ isActive }) => { return isActive ? { color: "aquamarine" } : {}; }}>
        Add Accounts
      </NavLink>
      <NavLink to="/edit" style={({ isActive }) => { return isActive ? { color: "aquamarine" } : {}; }}>
        Edit Accounts
      </NavLink>
      <NavLink onClick={()=>userLogout()} >
        {name}
      </NavLink>
    </nav>
    </>
  );
};

export default Navbar;