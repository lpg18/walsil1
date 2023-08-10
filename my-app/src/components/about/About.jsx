import React from 'react'
import './about.css'
// import ME from 'direccion'

const About = () => {
  
  return (
    <section id="about">
      <div className='container about__container'>
        <div className="about__img">
          <div className='about__img-img'>
            {/* <img src={ME} alt="" /> */}
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <h3>¿Por qué queremos casarnos?</h3>
            <h5>Con Sil nos seguimos conociendo hace 7 años y para seguir conociendonos vamos a dar el siguiente paso, luego de pensarlo ambos mucho tiempó y de que se alinien los planetas decidimos casarnos</h5>
            <h6>Walter</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About