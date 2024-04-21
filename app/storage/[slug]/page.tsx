import UploadButton from "../../uploadButton";

export default function PageComponent({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <div className="bg-[#110d11] w-full h-screen text-center pt-40">
        <h1 style={{ color: "#c0c0c0" }}>Upload file {params.slug}</h1>
        <div className="  flex items-center justify-center ">
          <UploadButton />;
        </div>
      </div>
    </>
  );
}
