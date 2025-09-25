import Image from "next/image";

export default function AmaraLogo({ className = "" }) {
  return (
    <Image
      src="/logo.png"   // file inside public/logo.png
      alt="Amara RCM Services Logo"
      width={300}       // increase width
      height={300}      // increase height
      className={className}
    />
  );
}
