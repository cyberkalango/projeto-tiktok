import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter"
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/projeto-tiktok.appspot.com/o/tiktok-video-1.mp4?alt=media&token=5a1e19f2-6d57-46ae-af1c-bbed73866b47"
      ></video>
      {/*sidebar*/}
      <VideoFooter />
    </div>
    );
}

export default Video;
