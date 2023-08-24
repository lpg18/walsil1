import React from 'react'
import './header.css'
import IMG1 from '../../assets/SW dorado 2.png'
import './countdown.js';

const Header = () => {
  return (
    <section id='header'>
      <div className="background_film">
        <div className="container header_container">
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