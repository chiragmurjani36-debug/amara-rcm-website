// components/AmaraLogo.js
import Image from "next/image";

export default function AmaraLogo({ className = "h-16 w-auto" }) {
  return (
    <Image
      src="/logo.png"   // path inside /public
      alt="Amara RCM Services Logo"
      className={className}
      width={300}       // adjust size
      height={300}
      priority          // ensures logo loads fast
    />
  );
}
