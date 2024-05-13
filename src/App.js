import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Project from './pages/Project'
import About from './pages/About'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>} />
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      
      
    </Routes>
    </BrowserRouter>
  
  )
}

export default App