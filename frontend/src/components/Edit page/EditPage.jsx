import React, { useState } from 'react';
import './edit.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const EditPage = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [service, setService] = useState('');
    const [checkId,setCheckId]=useState('')
    const [id, setId] = useState('');
    const [password, setPassword] = useState();
    const [err,setErr]  =useState('')
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`/home/edit`,{checkId,service,id,password})
        .then((res)=>{
            if(res.data==="submit"){
                navigate('/');
            }
        })
        .catch((error)=>{
            setErr(error.response.data)
        })
    };
    
    const handleCheck=(e)=>{
        e.preventDefault();
        axios.post(`/home/check`,{checkId})
        .then((res)=>{
            if(res.data==='edit'){
                setIsEdit(true);
                setId(checkId);
                setErr('')
            }
        })
        .catch((error)=>{
            setErr(error.response.data)
        })
    }

    if (!isEdit) {
        return (
            <>
            {err&& 
            (<Alert style={{opacity:0.7}} key="danger" variant="danger">
                {err}
            </Alert>)}

            <div className="form">
                <form onSubmit={handleCheck}>
                    <div className="input">
                        <h4><label style={{color:"white", }} htmlFor="service">ID:</label></h4>
                        <input
                            className='inputval'
                            type="text"
                            id="service"
                            value={checkId}
                            placeholder='Enter login id'
                            onChange={(e) => setCheckId(e.target.value)}
                        />
                    </div>

                    <div className="btn">
                        <button type="submit">Edit</button>
                    </div>
                </form>
            </div>
        </>)
    }
    else if (isEdit) {
        return (
            <div className="form">
                <form style={{opacity:0.8}} onSubmit={handleSubmit} className='mainform'>
                    {err&&(
                        <Alert key="danger" variant="danger">
                            {err}
                        </Alert>)}
                    <div className="input">
                        <label htmlFor="service">Service:</label>
                        <input
                            className='inputval'
                            type="text"
                            id="service"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="id">ID:</label>
                        <input
                            className='inputval'
                            type="text"
                            id="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password:</label>
                        <input
                            className='inputval'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default EditPage;