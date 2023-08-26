import React from 'react';

const MusicPlayer = ({ musicSrc }) => {
  return (
    <audio autoPlay loop>
      <source src={musicSrc} type="audio/mpeg" />
    </audio>
  );
};

export default MusicPlayer;
