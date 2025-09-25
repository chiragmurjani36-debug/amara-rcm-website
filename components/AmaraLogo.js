// components/AmaraLogo.js
import Image from "next/image";

export default function AmaraLogo({ className = "h-20 w-auto" }) {
  return (
    <Image
      src="/logo.png"   // path inside /public
      alt="Amara RCM Services Logo"
      className={className}
      width={1000}       // adjust size
      height={1000}
      priority          // ensures logo loads fast
    />
  );
}
