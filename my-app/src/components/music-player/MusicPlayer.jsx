import React from 'react';

const MusicPlayer = ({ musicSrc }) => {
  return (
    <audio controls autoPlay loop>
      <source src={musicSrc} type="audio/mpeg" />
      Tu navegador no soporta el elemento de audio.
    </audio>
  );
};

export default MusicPlayer;
