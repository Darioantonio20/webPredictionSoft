/* The code you provided is a React component called `VideoPrediction`. */
import React from "react";
import YouTube from "react-youtube";
import "../../assets/style/VideoPrediction.css";

function VideoPrediction() {
  const videoId = "MFuQ7DhkTDM"; // ID del video de YouTube

  const opts = {
    height: "100%", // Cambiado a porcentaje
    width: "100%", // Cambiado a porcentaje
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div className="video-container">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </>
  );
}

export default VideoPrediction;
