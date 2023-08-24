import React from 'react';
import './drive.css';
import { BsInstagram } from 'react-icons/bs';

const Drive = () => {
  return (
    <section id="drive">
      <div className="container container-spotify">
        <h3>¡Acá podrás compartir con nosotros la música que te gusta para ya ir poniéndonos en clima de fiesta!</h3>
        <iframe
          src="https://open.spotify.com/embed/playlist/2N2KBI06YkAfhRU9GCyRwv?si=e0bfad72cf374564&nd=1"
          title="Spotify Playlist"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <a
          href="https://open.spotify.com/playlist/2N2KBI06YkAfhRU9GCyRwv?si=5ca215eb7d144177&pt=88e4864517f6bab35dffdde12b60f317"
          id='btn-spotify'
          target='_blank'
          rel="noreferrer"
        >
          Agregar temas
        </a>
      </div>
      <div className="container container-hashtag">
        <h3>Compartimos este día junto a vos</h3>
        <h5>Compartí tus fotos y videos de ese hermoso día</h5>
        <div className="logo-ig">
          <BsInstagram />
        </div>
        <a
          href="https://www.instagram.com/explore/tags/silywal23/"
          target='_blank'
          rel="noreferrer"
        >
          #silywal23
        </a>
      </div>
    </section>
  );
};

export default Drive;
