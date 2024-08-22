import React from "react";
import {Routes,Route} from 'react-router-dom'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import AddID from "./components/Adding page/AddID";
import EditPage from "./components/Edit page/EditPage";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={[<Home/>]} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login'  element={<Login/>}/>
          <Route path='/add'  element={[<Navbar/>,<AddID/>]}/>
          <Route path='/edit'  element={[<Navbar/>,<EditPage/>]}/>
      </Routes>
    </div>
  );
}

export default App;
