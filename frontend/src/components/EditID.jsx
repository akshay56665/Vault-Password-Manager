import { useState,useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {useNavigate,useLocation} from 'react-router-dom'
import axios from 'axios'

export default function Component() {
  const [formData, setFormData] = useState({
    service: "",
    id: "",
    password: "",
  })
  const [error,setError]=useState(false)
  const navigate=useNavigate()
  const location=useLocation()
  const userId=location.state.ID

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {service,id,password}=formData
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/home/edit`,{userId,service,id,password})
    .then((res)=>{
      navigate('/home')
    })
    .catch((error)=>{
      setError(error.response.data)
    })
  }

  useEffect(() => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/home/getuser`,{userId})
    .then(res=>{
      const {service,id,password}=res.data
      setFormData({service,id,password})
    })
    .catch(err=>setError(err))
  }, [])
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        {error&&<Alert variant="destructive" className='text-center w-auto mx-2 mt-2 bg-red-100'>
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>}
        
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Edit Changes</CardTitle>
          <CardDescription className="text-center">
            Enter the edit details you want to change.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="service">Service</Label>
              <Input
                id="service"
                name="service"
                placeholder="Enter service name"
                value={formData.service}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="id">ID</Label>
              <Input
                id="id"
                name="id"
                placeholder="Login ID or number"
                value={formData.id}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}