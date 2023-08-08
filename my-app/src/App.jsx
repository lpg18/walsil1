import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Info from './components/info/Info.jsx'
import Confirmation from './components/confirmation/Confirmation.jsx'
import Contact from './components/contact/Contact.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Info />
      <Confirmation />
      <Contact />
    </>
  )
}

export default App