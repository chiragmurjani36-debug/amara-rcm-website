// components/AmaraMark.js
export default function AmaraMark({
  className = "h-8 w-8", // square icon
  title = "Amara mark",
  decorative = true,
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
      {/* transparent background */}

      <defs>
        <linearGradient id="chevGrad" x1="1" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor="#48e0d9" />
          <stop offset="0.55" stopColor="#1cc6d8" />
          <stop offset="1" stopColor="#0586bd" />
        </linearGradient>
        <linearGradient id="chevDepth" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0280a8" />
          <stop offset="0" stopColor="#005b86" />
        </linearGradient>
      </defs>

      {/* Only the chevrons, centered better for a square icon */}
      <g transform="translate(560,620) scale(0.8) rotate(270)">
        {/* BACK */}
        <path
          d="M0 0 H120 V-120"
          fill="none"
          stroke="url(#chevDepth)"
          strokeWidth="80"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(12,12)"
        />
        <path
          d="M80 80 H200 V-40"
          fill="none"
          stroke="url(#chevDepth)"
          strokeWidth="80"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(12,12)"
        />
        {/* FRONT */}
        <path
          d="M0 0 H120 V-120"
          fill="none"
          stroke="url(#chevGrad)"
          strokeWidth="72"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M80 80 H200 V-40"
          fill="none"
          stroke="url(#chevGrad)"
          strokeWidth="72"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
