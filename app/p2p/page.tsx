import dynamic from "next/dynamic";
const PeerComponent = dynamic(() => import("./peerComponent"), {
  ssr: false,
});

export default function PageComponent() {
  return (
    <>
      <div className="bg-[#0f1317] h-[100vh] pt-20">
        <PeerComponent />;
      </div>
    </>
  );
}
