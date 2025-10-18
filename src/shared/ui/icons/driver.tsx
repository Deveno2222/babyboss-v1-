import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}

export function Driver({ color = "#F6F6F6", size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 8.00053L19 10.0005L17.5 6.30053C17.3585 5.92186 17.1057 5.59495 16.7747 5.36288C16.4437 5.13081 16.0502 5.00448 15.646 5.00053H8.4C7.9925 4.99117 7.59188 5.10654 7.25177 5.33119C6.91166 5.55585 6.64832 5.87905 6.497 6.25753L5 10.0005L3 8.00053"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 14H7.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 14H17.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 10H5C3.89543 10 3 10.8954 3 12V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V12C21 10.8954 20.1046 10 19 10Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18V20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 18V20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
