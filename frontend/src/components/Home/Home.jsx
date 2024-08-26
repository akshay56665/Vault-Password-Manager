import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './home.css'
import {baseUrl} from '../../Url';

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get(`${baseUrl}/home`)
      .then((res) => {
        if (res.data === 'login') {
          console.log(res.data)
          navigate('/login');
        }
        setName(res.data.name);
        setData(res.data.data);
      })
  },[]);
  const handleDelete = (ID) => {
    axios.post(`${baseUrl}/home/delete`, { id: ID })
      .then((res) => {
        setData(data.filter((ele) => {
          return ele[1] !== res.data.arr[1];
        }))
      })
  }
  return (
    <>
      <Navbar name={name} />
      <div className="mainbox d-grid justify-content-center ">
        {data.map(element => (
          <div className="cards">
            <Card style={{ width: '30vw',marginTop: "30px", opacity:0.9}} className='card text-center'>
              <Card.Body>
                <Card.Title> <h4>{element[0]}</h4></Card.Title>
                <Card.Text>
                  <h5>{element[1]}</h5>
                </Card.Text>
                <Card.Text>
                  <h5>{element[2]}</h5>
                </Card.Text>
                <Button variant="outline-success" onClick={() => { handleDelete(element[1]) }}>Delete</Button>{' '}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home;
