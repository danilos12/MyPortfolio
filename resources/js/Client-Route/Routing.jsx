import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { Intros,Abouts, TechStack,Services } from '@/Pages'
const Routing = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Intros />} />
      <Route path="/about" element={<Abouts />} />
      <Route path="/techstack" element={<TechStack />} />

      <Route path="/services" element={<Services />} />

      {/* <Route path="/sample" element={<House />} /> */}
    </Routes>
  </Router>
  )
}

export default Routing
