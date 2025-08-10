import React, { useRef } from "react";

const SecondVideo = () => {
  const videoRef = useRef(null);

  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src={`${import.meta.env.BASE_URL}videos/output2.mp4`}
          className="size-full object-cover second-vd"
          style={{
            objectPosition: "15% 0%",
          }}
        />
      </div>
    </section>
  );
};

export default SecondVideo;
