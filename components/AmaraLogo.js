// components/AmaraLogo.js
export default function AmaraLogo({
  className = "h-16 w-auto", // larger default size
  title = "Amara logo",
  decorative = false,
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1400 800"
      role="img"
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
    >
      <defs>
        {/* primary gradient for chevrons */}
        <linearGradient id="chevGrad" x1="1" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor="#48e0d9" />
          <stop offset="0.55" stopColor="#1cc6d8" />
          <stop offset="1" stopColor="#0586bd" />
        </linearGradient>

        {/* subtle darker face for 3D depth */}
        <linearGradient id="chevDepth" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0280a8" />
          <stop offset="0" stopColor="#005b86" />
        </linearGradient>
      </defs>

      {/* Group: chevrons, scaled up */}
      <g transform="translate(150,400) scale(1)">
        {/* BACK (darker) */}
        <path
          d="M0 0 H160 V-160"
          fill="none"
          stroke="url(#chevDepth)"
          strokeWidth="80"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(12,12)"
        />
        <path
          d="M100 100 H260 V-60"
          fill="none"
          stroke="url(#chevDepth)"
          strokeWidth="80"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(12,12)"
        />

        {/* FRONT */}
        <path
          d="M0 0 H160 V-160"
          fill="none"
          stroke="url(#chevGrad)"
          strokeWidth="72"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100 100 H260 V-60"
          fill="none"
          stroke="url(#chevGrad)"
          strokeWidth="72"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Text wordmark – shifted right of chevrons */}
      <text
        x="500"
        y="450"
        textAnchor="start"
        fontFamily="Poppins, 'Segoe UI', Roboto, Arial, sans-serif"
        fontWeight="700"
        fontSize="280"
        fill="#eef4fb"   // change to "currentColor" if you want theme-based
        letterSpacing="-8"
      >
        Amara
      </text>
    </svg>
  );
}
