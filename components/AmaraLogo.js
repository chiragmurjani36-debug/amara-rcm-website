// components/AmaraLogo.js
import Image from "next/image";

export default function AmaraLogo() {
  return (
    <div className="relative h-[7rem] w-[7rem]">
      <Image
        src="/logo.png"
        alt="Amara RCM Services Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
