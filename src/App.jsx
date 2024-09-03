import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import Footer from './components/Footer'


import Van from './pages/vans/Van'
import Van2 from './pages/vans/Van2'
import Van3 from './pages/vans/Van3'
import Van4 from './pages/vans/Van4'
import Van5 from './pages/vans/Van5'
import Van6 from './pages/vans/Van6'
import Signs from './pages/signin/Signs'
import Notfound from './pages/signin/Notfound'
import Dashboard from './pages/Dashboards/Dashboard'
import Modest from './pages/Dashboards/Modest'
import BeachBum from './pages/Dashboards/BeachBum'
import GreenWonder from './pages/Dashboards/GreenWonder'
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/vans' element={<Vans />} />
          <Route exact path='/signs' element={<Signs />} />
         
          <Route exact path='/vans/van1' element={<Van/>} />
          <Route exact path='/vans/van2' element={<Van2/>} />
          <Route exact path='/vans/van3' element={<Van3/>} />
          <Route exact path='/vans/van4' element={<Van4/>} />
          <Route exact path='/vans/van5' element={<Van5/>} />
          <Route exact path='/vans/van6' element={<Van6/>} />
          <Route exact path='/signin/signs' element={<Signs/>} />
          <Route exact path='/signin/Notfound' element={<Notfound/>} />
          <Route exact path ='/dashboard' element={<Dashboard/>} />
           <Route exact path ='/modest' element={<Modest/>} />
          <Route exact path ='/beachbum' element={<BeachBum/>} />
          <Route exact path ='/greenwonder' element={<GreenWonder/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
 