import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import axios from 'axios'

axios.defaults.withCredentials = true;
export default function Navbar({username}) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const navigate=useNavigate()

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'Contact', href: '/contact' },
    { name: "Add Password",href:"/add"},
  ]

  const DropDown=[
    {name:"Add new Password",link:"/add"},
    {name:"Generate strong Password",link:"/generate-password"}
  ]

  const handleLogout=()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/logout`)
    .then(res=>{
      navigate('/')
    })
    .catch((err)=>setErr(err))
  }
  
  return (
    <nav className="bg-white shadow-xl">
      <div className="min-w-full mx-auto px-4 bg-gray-50">
        <div className="flex justify-between">
          
          {/* left most div for menus */}
          <div className="flex ml-0 md:ml-10 lg:ml-14">
            <div className='ml-5 mr-10'>
              <Link to="/home" className="flex items-center py-4 px-2">
                <h2 className="font-bold text-black text-3xl hover:scale-105 transition-all duration-300">Vault</h2>
              </Link>
            </div>
            <div className="ml-10 hidden md:flex items-center justify-between space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="py-4 px-2 text-xl text-black font-semibold hover:scale-105 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}

            </div>
          </div>

          {/* rightmost div for signup/login */}
          <DropdownMenu className='hidden md:flex ' >
            <DropdownMenuTrigger className='hidden md:flex mr-20'>
              <img className='h-16 w-16' src="./avatar.jpg" alt="User" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='px-5 flex flex-col items-center justify-between shadow-2xl'>
              <div className="flex justify-center items-center">
                <DropdownMenuItem >
                  <img className='h-24 w-24' src="./avatar.jpg" alt="User" />
                </DropdownMenuItem>
                <DropdownMenuLabel className="font-semibold text-xl">{username}</DropdownMenuLabel>  
              </div>
                <Button className="my-2 w-full" onClick={handleLogout}>Logout</Button>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* toggle menu for smaller screens */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMenu}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="hover:text-green-500  font-semibold transition duration-300 text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex flex-col space-y-2 mt-4">
                    <Button onClick={handleLogout} className='text-lg'>Logout</Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}