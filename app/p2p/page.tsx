import dynamic from "next/dynamic";
const PeerComponent = dynamic(() => import("./peerComponent"), {
  ssr: false,
});

export default function PageComponent() {
  return <PeerComponent />;
}
