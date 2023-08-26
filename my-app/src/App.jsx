import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Info from './components/info/Info.jsx';
import Confirmation from './components/confirmation/Confirmation.jsx';
import Contact from './components/contact/Contact.jsx';
import Gift from './components/gift/Gift.jsx';
import Drive from './components/drive-imgs/Drive.jsx';
import MusicPlayer from './components/music-player/MusicPlayer.jsx';
import IMG2 from './assets/Grupo_PopUpMusica-2.webp'
import './moduloX.css'
import Musica from '../src/assets/musica.mp3'

const App = () => {
  const [showRemaining, setShowRemaining] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false); 

  const componentsToRender = [
    <Header key="header" />,
    <Nav key="nav" />,
    <About key="about" />,
    <Info key="info" />,
    <Drive key="drive" />,
    <Gift key="gift" />,
    <Contact key="contact" />,
    <Confirmation key="confirmation" />,
  ];

  const handleEnterClick1 = () => {
    setShowRemaining(true);
    setMusicPlaying(false);
  };

  const handleEnterClick2 = () => {
    setShowRemaining(true);
    setMusicPlaying(true);
  };

  return (
    <>
      {musicPlaying && <MusicPlayer musicSrc={Musica} />}

      {showRemaining && componentsToRender}
      {!showRemaining && (
        <section id='moduloX'>
          <div className=''>
            <img src={IMG2} alt="" id='img2-up' />
            <div className='cinta'>
              <h2>Bienvenidos a la invitación de</h2>
              <div className="container hall_container">
                <div className="Y">
                  <h1>Y</h1>
                </div>
                <h3>Walter</h3>
                <h3>Silvia</h3>
              </div>


              <div className="btn_container">
                <h3>La música de fondo es parte de la experiencia</h3>
                <div className="btns">
                  <button onClick={handleEnterClick1}>Ingresar sin música</button>
                  <button onClick={handleEnterClick2}>Ingresar con música</button>
                </div>
              </div>
            </div>
            <img src={IMG2} alt="" />
          </div>



        </section>


      )}
    </>
  );
};

export default App;
