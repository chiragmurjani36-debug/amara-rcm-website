export default function AmaraLogo({ className = "h-12 w-auto", title = "Amara logo", decorative = false }) {
  return (
   <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1200 1200" 
    aria-hidden={decorative || undefined}
    aria-label={decorative ? undefined : title}
  >
    {/* Background */}
 <rect width="700" height="700" fill="#050826"/>

  <defs>
     {/* primary gradient for chevrons */}
    <linearGradient id="chevGrad" x1="1" y1="0" x2="0.2" y2="1">
      <stop offset="0" stopColor="#48e0d9"/>
      <stop offset="0.55" stopColor="#1cc6d8"/>
      <stop offset="1" stopColor="#0586bd"/>
    </linearGradient>

    {/* subtle darker face for 3D depth */}
    <linearGradient id="chevDepth" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#0280a8"/>
      <stop offset="0" stopColor="#005b86"/>
    </linearGradient>


    

     {/* soft drop shadow */}
    <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="8" dy="10" stdDeviation="10" floodColor="#000" floodOpacity="0.55"/>
    </filter>
  </defs>

   {/* GROUP: Right-angled arrows above "r" */}
  <g transform="translate(755,570) scale(0.56) rotate(270)" filter="url(#softShadow)">
     {/* BACK (darker) */}
    <path d="M0 0 H120 V-120" fill="none" stroke="url(#chevDepth)" strokeWidth="60" strokeLinecap="round" strokeLinejoin="round" transform="translate(9,9)"/>
    <path d="M80 80 H200 V-40" fill="none" stroke="url(#chevDepth)" strokeWidth="60" strokeLinecap="round" strokeLinejoin="round" transform="translate(9,9)"/>

     {/* FRONT */}
    <path d="M0 0 H120 V-120" fill="none" stroke="url(#chevGrad)" strokeWidth="54" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M80 80 H200 V-40" fill="none" stroke="url(#chevGrad)" strokeWidth="54" strokeLinecap="round" strokeLinejoin="round"/>

     {/* highlight */}
  {/* <path d="M0 0 H120 V-120" fill="none" stroke="url(#chevHighlight)" strokeWidth="10" opacity="0.8"/>
    <path d="M80 80 H200 V-40" fill="none" stroke="url(#chevHighlight)" strokeWidth="10" opacity="0.8"/> */}
  </g> 

   {/* Main Title (editable text) */}
  <text x="600" y="720" textAnchor="middle"
        fontFamily="Poppins, 'Segoe UI', Roboto, Arial, sans-serif"
        fontWeight="700"
        fontSize="420"
        fill="#eef4fb"
        letterSpacing="-6">
    Amara
  </text>

  
</svg>

  );
}
