import React, { useState, useRef } from 'react';
import './musicPlayer.css';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';

const MusicPlayer = ({ musicSrc }) => {
  const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar la reproducción
  const audioRef = useRef(null); // Referencia al elemento de audio

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className='musicplayer'>
      <div className="solid">
        <audio ref={audioRef} autoPlay loop>
          <source src={musicSrc} type="audio/mpeg" />
        </audio>
        <div className="play-pause-button" onClick={togglePlayPause}>
          {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

