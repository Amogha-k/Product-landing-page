import React from 'react';

function VideoPlayer() {
  return (
    <div className="video-container">
      <iframe
         width="1280"
    height="720"
        src="https://www.youtube.com/embed/H-1LxMZCCwY?si=xz_UopTHdiTsaxid&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      
    </div>
   
  );
}

export default VideoPlayer;
