import Image from "next/image";
import React, { useRef, useEffect } from "react";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`

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

      <div
        style={{
          position: "absolute",
          top: "20rem",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 className={`shiny-silver-text text-8xl`}>
          Decentralize AI training
        </h1>
        <p className={` text-xl mt-12 font-light	`} style={{ color: "#c0c0c0" }}>
          Imagenet is a platform dedicated to decentralizing AI training data.
          Contributors are compensated through smart contracts, guaranteeing
          fair and prompt payment. All of our data is stored in peer to peer
          decentralized storage.
        </p>
      </div>

      <div
        style={{
          background: "rgba(17, 13, 17, 1)",
          height: "100rem",
          color: "white",
        }}
      >
        blah blah
      </div>
    </div>
  );
}
