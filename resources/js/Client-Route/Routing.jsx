import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { Intros,Abouts, Tools } from '@/Pages'
import Objecto from '@/Components/Objecto'
const Routing = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Intros />} />
      <Route path="/about" element={<Abouts />} />
      <Route path="/tools" element={<Tools />} />

      <Route path="/sample" element={<Objecto />} />
    </Routes>
  </Router>
  )
}

export default Routing
