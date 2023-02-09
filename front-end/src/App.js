import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CreateUser from './pages/CreateUser'
import Home from './pages/Home'
import UpdateUser from './pages/UpdateUser'
import Navbar from './Navbar'

function App() {
  const [id,setId]=useState("")
  const getId=(id)=>{
      setId(id)
  }
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path='/createForm' element={<CreateUser/>}></Route>
       <Route path='/updateform' element={<UpdateUser id={id}/>}></Route>
       <Route path='/' element={<Home getId={getId}/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

