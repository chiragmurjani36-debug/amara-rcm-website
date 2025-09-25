// components/AmaraLogo.js
import Image from "next/image";

export default function AmaraLogo() {
  return (
    <div className="relative h-24 w-48">   {/* <— set the exact size you want */}
      <Image
        src="/logo.png"
        alt="Amara RCM Services Logo"
        fill                         // Next/Image fills the parent box
        className="object-contain"   // keeps aspect ratio
        priority
      />
    </div>
  );
}
