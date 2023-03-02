import React, { useState } from "react";
import Image from "next/image";

function SolarVideo({ thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div >
      {isPlaying ? (
        <iframe
        id="iframe"
          width="520"
          className="mr-8 slide-left"
          height="325"
          src="https://www.youtube.com/embed/L9V_2V967vs?autoplay=0"
          title="Why EPCs Don&#39;t Want To Work With NEW Solar Reps"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ) : (
        <Image
          width={560}
          height={315}
          className="slide-left"
          src={thumbnail}
          alt="Video thumbnail"
          onClick={handlePlay}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}

export default SolarVideo;
