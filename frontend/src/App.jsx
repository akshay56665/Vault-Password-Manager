import {Routes,Route} from 'react-router-dom'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import AddID from "./components/AddID";
import EditID from "./components/EditID";
import Home from "./components/Home";
import LogggedHomePage from './components/LoggedHomePage'
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login'  element={<Login/>}/>
        <Route path='/home'  element={<LogggedHomePage/>}/>
        <Route path='/add'  element={[<Navbar/>,<AddID/>]}/>
        <Route path='/edit'  element={[<Navbar/>,<EditID/>]}/>
        <Route path='/contact'  element={<ContactPage/>}/>
      </Routes>
    </div>
  )
}

export default App
