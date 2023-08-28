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
          href="https://open.spotify.com/playlist/2N2KBI06YkAfhRU9GCyRwv?si=b3389d31413145b4&pt=80c95528cd2ddfc297082005ff9a8ab7"
          id='btn-spotify'
          target='_blank'
          rel="noreferrer"
        >
          Agregar temas
        </a>
      </div>
      <div className="container container-hashtag">
        <h3>Compartimos este día junto a vos</h3>
        <h5>Seguinos en instagram</h5>
        <div className="logo-ig">
          <BsInstagram />
        </div>
        <a
          href="https://instagram.com/silywal23?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target='_blank'
          rel="noreferrer"
        >
         @silywal23
        </a>
        <h5>Compartí tus fotos y videos de ese hermoso día</h5>
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
