import Image from "next/image";
import localFont from "next/font/local";
import React, { useRef, useEffect } from "react";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./milkman.ttf",
  display: "swap",
});

export default function Home() {
  return (
    <div>
      <div className="video-overlay">
        <video
          width="100%"
          height="50vh"
          autoPlay
          loop
          muted
          src="/video.mp4"

          // className="transform rotate-180"
        />
      </div>
      <div style={{ background: "rgba(17, 13, 17, 1)", height: "100rem" }}>
        blah blah
      </div>
    </div>
  );
}
