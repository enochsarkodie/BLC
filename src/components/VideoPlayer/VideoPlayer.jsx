import React, {useRef,useEffect} from 'react'
import './VideoPlayer.css'
import video from '../../assets/blc.mp4'



const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const videoRef = useRef(null);

  // Pause/play based on playState
  useEffect(() => {
    if (!videoRef.current) return;
    if (playState) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // optional: reset to start
    }
  }, [playState]);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video ref={videoRef} src={video} muted controls />
    </div>
  );
};

export default VideoPlayer;
