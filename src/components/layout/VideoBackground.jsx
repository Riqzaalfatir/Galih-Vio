// components/layout/VideoBackground.jsx
"use client";

import { useEffect, useRef } from "react";

const VideoBackground = ({ start }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (start) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [start]);

  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden z-0 -mb-[100vh]">
      {/* -mb-[100vh] agar tidak mendorong konten ke bawah */}

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        // muted
        loop
        playsInline
      >
        <source src="/images/Hero/VideoGV.mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
    </div>
  );
};

export default VideoBackground;