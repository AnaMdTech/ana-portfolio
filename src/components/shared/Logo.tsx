import React from "react";

export default function Logo({
  className = "h-8 w-auto",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 50"
      width="120"
      height="40"
      className={className}
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="35"
        fontFamily="Poppins, Arial, sans-serif"
        fontSize="30"
        fontWeight="bold"
        letterSpacing="2"
        fill="url(#textGradient)"
      >
        AnaMd
      </text>
    </svg>
  );
}
