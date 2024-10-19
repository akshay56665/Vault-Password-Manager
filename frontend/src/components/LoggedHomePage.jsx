import { useState,useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "./ui/button"
import Navbar from "./Navbar"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function LoggedHomePage() {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/home`)
    .then((res) => {
      if(res.data==='authenticate'){
        navigate('/login')
      }
      else{
        setName(res.data.name);
        setData(res.data.data);
      }
    })

  });
  
  const handleEdit = (userId) => {
    navigate('/edit',{state:{ID:userId}})
  }

  const handleDelete = (ID) => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/home/delete`, { id: ID })
    .then((res) => {
      setData(data.filter((ele) => {
        return ele[1] !== res.data.arr[1];
      }))
    })
  }
  
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Navbar username={name}/>
      </header>
      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center font-semibold mb-6">Here's your personal Vault</h1>
        <div className="mx-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((card,index) => (
            <Card key={index} className="flex flex-col justify-between items-center 
            hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="font-semibold text-3xl">{card.service}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className=" text-lg my-2 text-black">{card.userId}</CardDescription>
                <CardDescription className=" text-lg my-2 text-black">{card.password}</CardDescription>
                <div className="flex my-2 gap-20">
                  <Button onClick={()=>handleEdit(card.userId)} className="hover:scale-105 transition-all duration-200">Edit</Button>
                  <Button onClick={()=>handleDelete(card.userId)} className="hover:scale-105 transition-all duration-200">Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
