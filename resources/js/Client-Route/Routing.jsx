import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { Intros,Abouts, Tools } from '@/Pages'
const Routing = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Intros />} />
      <Route path="/about" element={<Abouts />} />
      <Route path="/tools" element={<Tools />} />
    </Routes>
  </Router>
  )
}

export default Routing
