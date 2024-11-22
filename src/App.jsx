import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}/>
    </Routes>

    <Footer />
    </>
  )
}

export default App
