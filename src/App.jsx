import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import Footer from './components/Footer'


  const App = () => {
return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/vans' element={<Vans />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
