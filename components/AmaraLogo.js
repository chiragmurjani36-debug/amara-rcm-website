// components/AmaraLogo.js
export default function AmaraLogo({
  className = ""
}) {
  <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" fill="#FFC53D" />
      <path
        d="M30 35h40v5H30v-5zm0 10h40v5H30v-5zm0 10h40v5H30v-5zm0 10h25v5H30v-5z"
        fill="#0B1220"
      />
      <circle cx="70" cy="70" r="8" fill="#00A8A8" />
    </svg>
  );
}
