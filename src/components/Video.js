import React from "react";
import ReactPlayer from "react-player";
import './MyVideo.css';

const MyVideo = () => {
  return (
    <div className="video-container">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          src="https://www.youtube.com/watch?v=BMmiebOPLGA"
          width="100%"
          height="100%"
          volume={0.5}
          autoPlay={1}
          controls
          config={{
            youtube: {
              color: 'white',
            },
          }}
        />
      </div>
    </div>
  );
};

export default MyVideo;
