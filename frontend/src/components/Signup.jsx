import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/ui/icons"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

axios.defaults.withCredentials = true;
export default function Signup() {
  const [isLoading, setIsLoading] = useState(false)
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState(null)
  const navigate=useNavigate()
  
  async function onSubmit(e) {
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/signup`,{
      fullname:username,
      email:email,
      password:password
    })
    .then((res)=>{
      if(res.data==='logged'||res.data==='signed'){
        navigate('/home')     
      }
    })
    .catch((err)=>{
      setError(err.response.data);
    })

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        {error&&<Alert variant="destructive" className='text-center w-auto mx-2 mt-2 bg-red-100'>
          <AlertDescription>
              {error}
          </AlertDescription>
        </Alert>}
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <form onSubmit={onSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" value={username} onChange={e=>setUsername(e.target.value)} 
              placeholder="johndoe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={e=>setEmail(e.target.value)}
              placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={e=>setPassword(e.target.value)}
              placeholder="Password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign up
            </Button>
          </CardFooter>
          <h2 className='text-center mb-5'>Already have an account? <Link className='text-blue-600' to='/login'>Login</Link></h2>
        </form>
      </Card>
    </div>
  )
}
