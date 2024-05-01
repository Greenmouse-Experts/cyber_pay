import { useTheme } from '@emotion/react';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import ReactPlayer from 'react-player';

const PlayVideo = ({ onClose }) => {
  const { theme } = useTheme()
  return (
    <div className={`play ${theme === 'light' ? '' : 'darkplay'}`}>
      <div className="play_div">
        <div className="play_icon"><span onClick={onClose}><IoClose /></span></div>
        <ReactPlayer
          url="https://res.cloudinary.com/dqhiovweu/video/upload/VID-20240404-WA0081_ruohno.mp4"
          width="100%"
          height="420px"
          controls
        />
      </div>
    </div>
  );
};

export default PlayVideo;
