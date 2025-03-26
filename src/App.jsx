import React from 'react'
import Navbar from './Components/Navbar' 
import Home from './components/pages/Home'
import Courses from './components/pages/Courses'
import Pages from './components/pages/Pages'
import Bloges from './components/pages/Bloges'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Courses" element={<Courses />}></Route>
        <Route path="/Pages" element={<Pages />}></Route>
        <Route path="/Blogs" element={<Bloges />}></Route>
       
      </Routes>
    </>
  )
}

export default App
