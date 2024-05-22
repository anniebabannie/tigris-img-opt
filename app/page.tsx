import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>I have an image called <code>clouds.jpg</code> in my Tigris bucket. Let's retrieve it as a smaller image.</p>
      <Image src="clouds.jpg" alt="logo" width={100} height={100} />
    </div>
  );
}
