import Image from "next/image";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./my-font.woff2",
  display: "swap",
});

export default function Home() {
  return (
    <div>
      <div className="video-overlay video-overlay2">
        <video width="100%" height="100" autoPlay muted src="/video.mp4" />
      </div>
    </div>
  );
}
