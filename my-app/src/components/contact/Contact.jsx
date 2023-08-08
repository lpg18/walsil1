import React from 'react'
import './contact.css'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="container contact__container">
        <div className="head">
          <h3>Ante cualquier consulta te podes comunicar conmigo o con Sil</h3>
          <h3>Via WhatsApp</h3>
          <h6>Haciendo click en los enlaces naranjas que dicen "Enviame un un mensaje"</h6>
        </div>
        <div className='content__wpp'>
          <div className='container mensaje_container'>
            <BsWhatsapp className='wpp-icon'/>
            <h2>Silvia</h2>
            <a href="https://wa.me/5491154723055" className='href' target='_blank' without rel="noreferrer">Enviame un mensaje</a>
          </div>
        </div>
        <div className='content__wpp'>
          <div className='container mensaje_container'>
            <BsWhatsapp className='wpp-icon'/>
            <h2>Walter</h2>
            <a href="https://wa.me/5491141795586" className='href' target='_blank' without rel="noreferrer">Enviame un mensaje</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact