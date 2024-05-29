import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen gap-6">
      <p className="text-xl">I have an image named <code>clouds.jpg</code> in my Tigris bucket.</p>
      <p className="text-xl">Let's retrieve it as a smaller image.</p>
      <Image src="https://fly.storage.tigris.dev/next-image-opt/clouds.jpg" alt="logo" width={100} height={100} />
    </div>
  );
}
