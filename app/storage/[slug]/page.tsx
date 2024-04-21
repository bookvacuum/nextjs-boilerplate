import UploadButton from "../../uploadButton";

export default function PageComponent({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <div>
        <h1 style={{ color: "#c0c0c0" }}>Upload file 1!!!!{params.slug}</h1>
      </div>
      <div className="bg-[#110d11] h-screen flex justify-center items-center">
        <UploadButton />;
      </div>
    </>
  );
}
