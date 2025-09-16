// components/AmaraLogo.js
export default function AmaraLogo({
  className = "h-10 w-auto",
  title = "Amara logo",
  decorative = false,
  withShadow = false, // set true if you want the soft shadow on large uses
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1200"
      role="img"
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
    >
      {/* Transparent background (no <rect>) */}

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

        {/* soft drop shadow (disabled by default for crisp small sizes) */}
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="8"
            dy="10"
            stdDeviation="10"
            floodColor="#000"
            floodOpacity="0.55"
          />
        </filter>
      </defs>

      {/* Chevron mark */}
      <g
        transform="translate(755,570) scale(0.56) rotate(270)"
        filter={withShadow ? "url(#softShadow)" : undefined}
      >
        {/* BACK (darker) */}
        <path
          d="M0 0 H120 V-120"
          fill="none"
          stroke="url(#chevDepth)"
          strokeWidth="60"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(9,9)"
        />
        <path
          d="M80 80 H200 V-40"
          fill="none"
          stroke="url(#chevDepth)"
          strokeWidth="60"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(9,9)"
        />

        {/* FRONT */}
        <path
          d="M0 0 H120 V-120"
          fill="none"
          stroke="url(#chevGrad)"
          strokeWidth="54"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M80 80 H200 V-40"
          fill="none"
          stroke="url(#chevGrad)"
          strokeWidth="54"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Wordmark */}
      <text
        x="600"
        y="720"
        textAnchor="middle"
        fontFamily="Poppins, 'Segoe UI', Roboto, Arial, sans-serif"
        fontWeight="700"
        fontSize="220"
        fill="#eef4fb"      // change to "currentColor" to inherit from CSS
        letterSpacing="-6"
      >
        Amara
      </text>

      <text
        x="600"
        y="860"
        textAnchor="middle"
        fontFamily="Poppins, 'Segoe UI', Roboto, Arial, sans-serif"
        fontWeight="500"
        fontSize="70"
        fill="#e1e8f2"     // or "currentColor"
        letterSpacing="2"
      >
        RCM Services
      </text>

      <text
        x="600"
        y="940"
        textAnchor="middle"
        fontFamily="Poppins, 'Segoe UI', Roboto, Arial, sans-serif"
        fontWeight="400"
        fontSize="46"
        fill="#cfd8e6"     // or "currentColor"
        letterSpacing="1.2"
      >
        Your Revenue, Our Responsibility
      </text>
    </svg>
  );
}
