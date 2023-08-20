import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Info from './components/info/Info.jsx'
import Confirmation from './components/confirmation/Confirmation.jsx'
import Contact from './components/contact/Contact.jsx'
import Gift from './components/gift/Gift.jsx'
import Drive from './components/drive-imgs/Drive.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Info />
      <Confirmation />
      <Drive />
      <Gift />
      <Contact />
    </>
  )
}

export default App