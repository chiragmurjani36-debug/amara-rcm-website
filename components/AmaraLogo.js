// components/AmaraLogo.js
export default function AmaraLogo({ className = "h-16 w-auto" }) {
  return (
    <img
      src="/logo.png"
      alt="Amara RCM Services Logo"
      className={className}
    />
  );
}
