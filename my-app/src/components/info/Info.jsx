import React from 'react';
import './info.css';
import './countdown.js';

const Info = () => {
  return (
    <section id='info'>
      <div className="background-imgs">
        <div className='container info__container'>
          <div className="map__content grid-item2">
            <iframe title="Map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=C.%20133%20A%204194,%20B1886EZB%20Ranelagh,%20Provincia%20de%20Buenos%20Aires+(El%20Mandala)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.gps.ie/car-satnav-gps/">GPS devices</a>
            </iframe>
          </div>
          <div className="text__content grid-item2">
            <h3>Lugar</h3>
            <h5>Descripción del lugar</h5>
          
          </div>
          <div className="countdown__content grid-item2">
            <div id="countdown">
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
