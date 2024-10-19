import {Link} from "react-router-dom"
import { ShieldCheck } from "lucide-react"
function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <ShieldCheck className="h-6 w-6" />
        <span className="ml-2 text-2xl font-bold">Vault</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/contact">
          Contact
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/login">
          Login
        </Link>
      </nav>
    </header>
  )
}

export default Header
