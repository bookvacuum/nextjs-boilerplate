import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="video-overlay video-overlay2">
        <video width="100%" height="100" loop autoPlay muted src="/video.mp4" />
      </div>
    </div>
  );
}
