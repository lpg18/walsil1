import React from 'react'
import './header.css'
import IMG1 from '../../assets/SW dorado 2.png'
import './countdown.js';

const Header = () => {
  return (
    <section id='header'>
      <div className="background_film">
        <div className="container header_container">
          {/* <h3>La Boda</h3>
          <h3>de</h3>
          <h1>Silvia y Walter</h1> */}
          <img src={IMG1} alt="" />
        </div>
        <div className="countdown__content">
            <div id="countdown">

            </div>
          </div>
      </div>
     
    </section>
  )
}

export default Header