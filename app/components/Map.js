import Image from "next/image";

export default function Map() {
  return (
    <>
      <div className="justify-content-center text-center mt-4">
        <Image
          src="/under-con.jpg"
          alt="Under Construction"
          height={500}
          width={500}
        />
      </div>
    </>
  );
}
