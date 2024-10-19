import { useEffect } from "react"
import Header from "./Header"
import HeroSection from "./HeroSection"
import Footer from "./footer"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate=useNavigate()
  
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/home`)
    .then((res)=>{
      if(res.data!=='authenticate'){
        navigate('/home');
      }
    })
  },[])
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}